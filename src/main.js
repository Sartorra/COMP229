import { eJsServerWrapper } from '../eJsServerWrapper/index.js'
import express from 'express'

let certPath = "/var/www/site/"

const app = express()
const ServerWrapper = new eJsServerWrapper(app, `${certPath}key.pem`, `${certPath}cert.pem`);

// Basic Hello World Example
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Connect the listeners
ServerWrapper.ConnectListeners();