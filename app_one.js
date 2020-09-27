const express = require("express");
const app = express();

app.get("/", (req, res) => res.json({ app: "APP 1" }));

module.exports = app;
