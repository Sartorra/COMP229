const config = require(`${process.cwd()}/src/config/config`);
const express = require('express');
const morgan = require('morgan');
const compress = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session')
const fs = require('fs');

// Setup the express app
let app = express();

// Setup the logger
switch (process.env.NODE_ENV) {
    case 'development':
        app.use(morgan('dev'));
        break;
    case 'production':
        app.use(compress());
        break;
}

//Setup middleware
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: config.sessionSecret
}));

// Setup views
app.set('views', `${process.cwd()}/src/app/views`);
app.set('view engine', 'ejs');

// Set up routes.
for (let route of fs.readdirSync(`${process.cwd()}/src/app/routes`)) {
    // Make sure we load index last.
    if (route === 'index.server.routes.js') {
        continue;
    }

    let router = require(`${process.cwd()}/src/app/routes/${route}`);
    router(app);
    console.log(`Loaded route: ${route}`);
}

// Load index last.
let router = require(`${process.cwd()}/src/app/routes/index.server.routes`);
router(app);
console.log(`Loaded route: index.server.routes.js`);

// export the app
module.exports = app;