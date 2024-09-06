const express = require('express');
const router = express.Router();
const messages = require('../messages/messages')

router.get('/', function(req, res, next){
    res.render('index', {messages: messages})
})

router.post("/new", (req, res, next) => {
    messages.push({
        text: req.body.text,
        user: req.body.user,
        added: new Date(),
        id: messages.length
    })
    res.redirect("/")
})

module.exports = router;