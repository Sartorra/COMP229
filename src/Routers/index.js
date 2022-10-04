// Main router.

import Express from 'express';
import { FindPage } from '../Modules/PageFinder.js'

const router = Express.Router()

// Main router
router.get('*', (req, res) => {
    // Get the url
    let url = req.url;

    // Find the page
    let page = FindPage(url);

    // Check if the page was found
    if (!page.pageFound) {
        // Respond with an error message.
        res.status(404).render('404', { url: url });
        return;
    }

    // Send the page
    res.render(url === "/" ? "index" : url);
});

export { router }