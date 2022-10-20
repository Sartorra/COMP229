const expressApp = require(`${process.cwd()}/src/config/express`);
const https = require('https');
const http = require('http');
const fs = require('fs');
const args = process.argv.slice(2);

if (args.length === 0) {
    console.log('No certificate specified\nNot running in https mode');
} else {
    // Slice the two certificates apart.
    const certificates = args.toString().split('END CERTIFICATE-----');
    console.log(certificates);
    const options = {
        key: certificates[0],
        cert: certificates[1]
    };
    https.createServer(options, expressApp).listen(443);
    console.log('Running in https mode');
}

http.createServer(expressApp).listen(80);


// docker run -d -p 80:80 -p 443:443 --name express-app styxies/express_app:latest `cat /var/key.pem`,`cat /var/cert.pem`