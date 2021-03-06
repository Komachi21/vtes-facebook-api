const express = require("express");
const session = require("express-session");
const cors = require("cors");
const router = require("./src/routes/web");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());

/* Để chạy server https */
// const https = require("https");
const http = require("http");
const fs = require("fs");

/* Chứng chỉ ssl */
const options = {
  key: fs.readFileSync("./localhost-key.pem"),
  cert: fs.readFileSync("./localhost.pem"),
};

/* Session */
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
    },
  })
);

/* Cấu hình body-parser */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* Routes */
app.use("/", router);

/* Run server */
var server = http.createServer(options, app);

/* Mở cổng server */
const PORT = process.env.PORT || 3000;
server.listen(PORT, function () {
  console.log("running at https://localhost:3000/");
});
