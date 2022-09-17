import { eJsServerWrapper } from '../eJsServerWrapper/index.js'
import express from 'express'
import { FindPage } from './Modules/PageFinder.js'

let certPath = "/var/www/site/"

const app = express()
const ServerWrapper = new eJsServerWrapper(app, `${certPath}key.pem`, `${certPath}cert.pem`);



// Basic Hello World Example
app.get('*', (req, res) => {
    let page = FindPage(req.url)
    res.send(page.pageContents)
})

// Connect the listeners
ServerWrapper.ConnectListeners(80, 443);