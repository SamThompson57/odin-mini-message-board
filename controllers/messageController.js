const messages = require("../messages/messages")

exports.details = (req,res,next) => {
  res.render('msgdetail',{message: messages[req.params.id]} )
}

