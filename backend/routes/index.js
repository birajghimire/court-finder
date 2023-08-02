const express = require('express');
const router = express.Router();
const {ensureGuest, ensureAuth} = require('../middleware/auth');

router.get('/', ensureGuest, (req, res) => {
    res.render('login', {
        layout: 'login'
    });
});

router.get('/chessboard', ensureAuth, (req, res) => {
    res.render('chessboard');
})

module.exports = router;