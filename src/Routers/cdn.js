// cdn router

import Express from 'express';
import { FindPage } from '../Modules/PageFinder.js'

const router = Express.Router()

// CDN router
router.get('*', (req, res) => {
    // Get the url
    let url = `/cdn/${req.url}`;

    // Find the page
    let page = FindPage(url);

    // Check if the page was found
    if (!page.pageFound) {
        // Respond with an error message.
        res.status(403).send("File not found");
        return;
    }

    // Send the page
    res.send(page.pageContents);
});

export { router }