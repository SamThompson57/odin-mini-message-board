// app file
const express = require('express');
const createError = require('http-errors')
const userRouter = require('./routes/index.js');
const path = require("path");
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const app = express();

const indexRouter = require('./routes/index.js');
const newRouter = require('./routes/new.js');
const msgRouter = require('./routes/message.js')

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser())


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// application-level middlewares, will always execute on every incoming requests

// parses form payloads and sets it to the `req.body`
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/new', newRouter);
app.use('/msgdetail', msgRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });

  // error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

//const PORT = 3000;
//app.listen(PORT, () => console.log(`I am listening on port ${PORT}!`));

module.exports = app