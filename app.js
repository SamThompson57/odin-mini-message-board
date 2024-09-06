// app file
const express = require('express');
const userRouter = require('./routes/index.js');
const path = require("node:path");
const app = express();

const indexRouter = require('./routes/index.js');
const newRouter = require('./routes/new.js');
const msgRouter = require('./routes/message.js')

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// application-level middlewares, will always execute on every incoming requests

// parses form payloads and sets it to the `req.body`
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/new', newRouter);
app.use('/msgdetail', msgRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`I am listening on port ${PORT}!`));
