import { eJsServerWrapper } from '../eJsServerWrapper/index.js'
import express from 'express'

const app = express()
const ServerWrapper = new eJsServerWrapper(app, "../servercert.pem", "../rootcert.pem");
const port = 443

// Basic Hello World Example
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Start listening on port 443
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

ServerWrapper.ConnectListeners();