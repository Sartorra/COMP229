import { eJsServerWrapper } from '../eJsServerWrapper/index.js'
import express from 'express'
import fs from 'fs'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import compression from 'compression'
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let certPath = "/var/www/site/"

const app = express()
const ServerWrapper = new eJsServerWrapper(app, `${certPath}key.pem`, `${certPath}cert.pem`);

async function setupRouters() {
    // Scan the routers folder for routers
    let routerFiles = fs.readdirSync("./src/Routers/");
    await routerFiles.forEach(async (file) => {
        // Import the router
        let router = await import(`./Routers/${file}`);

        // Check if the router is the base router
        if (file === "index.js") {
            // Use the base router
            app.use(router.router);
        }
        else {
            // Not the base router, use the router with the file name as the path
            app.use(`/${file.replace(".js", "")}`, router.router);
            console.log(`Loaded router: ${file}`);
        }
    });
}

// Initialize the server
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'Pages'));
app.use(compression());
app.use(cookieParser());
app.use(express.static("public"));
app.use(express.json());
await setupRouters();
ServerWrapper.ConnectListeners(80, 443);