"use strict";

require("dotenv").config();
const express = require("express");

const APP_PORT = process.env.APP_PORT;
const APP_HOST = process.env.APP_HOST;

const app = express();
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(APP_PORT, APP_HOST, () => {
  console.log(`Running on http://${APP_HOST}:${APP_PORT}`);
});
