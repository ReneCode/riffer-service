const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const HttpStatus = require("http-status-codes");
const cors = require("cors");

const strokesRoute = require("./routes/strokes");
const configRoute = require("./routes/config");
const devicesRoute = require("./routes/devices");

const app = express();

app.use(cors());

// logging, should be the first app.use
app.use(morgan("dev"));

// body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  // middleware
  // check authorization or other things
  next();
});

app.use("/api/devices", devicesRoute);
app.use("/api/strokes", strokesRoute);
app.use("/api/config", configRoute);

// route not handled - handler ;-)
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = HttpStatus.NOT_FOUND;
  next(error);
});

// error handling - should be the last use
app.use((error, req, res, next) => {
  // catches all errors of the app
  res.status(error.status || HttpStatus.INTERNAL_SERVER_ERROR);
  res.json({
    error: {
      message: "sorry - some error happens"
    }
  });
});

module.exports = app;
