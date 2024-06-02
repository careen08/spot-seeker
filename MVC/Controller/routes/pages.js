const express = require('express');
const router = express.Router();

const pagesData = require('../data/Pages1.json'); 

router.post('/page', (req, res) => {
    const pageId = req.body.pageId.toLowerCase();
    const pageData = pagesData.pages.find(page => page.id.toLowerCase() === pageId);

    if (pageData) {
        res.json(pageData);
    } else {
        res.status(404).json({ error: "Page not found" });
    }
});

module.exports = router;
