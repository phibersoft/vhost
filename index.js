const vhost = require("vhost");
const express = require("express");
var PORT = process.env.PORT || 4000;

const app_one = require("./admin/dist/bundle");
const app_two = require("./panel/dist/bundle");
express()
  .use(vhost(`www.phibersoft.com`, app_one))
  .use(vhost(`admin.phibersoft.com`, app_two))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
// var app = express();
// app.get(`/`, (req, res) =>
//   res.json({ success: true, developer: "phibersoft" })
// );

// app.listen(PORT, () => console.log(`Listening on Port : ${PORT}`));
