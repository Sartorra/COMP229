// Main router.
const Express = require('express');

const router = Express.Router()

// Main router
router.get('*', (req, res) => {
    let url = req.url;

    let onRender = (err, html) => {
        // Handle any render errors.
        if (err) {
            // Check for faulty lookup view.
            if(err.message.indexOf('Failed to lookup view') !== -1) {
                res.status(404).render('404', {url: url})
            }
            
            throw err;
        }

        //It's all good, send the page.
        res.send(html);
    }

    // Render the page.
    res.render(url === "/" ? "index" : url.substring(1), onRender);
});

module.exports = router;