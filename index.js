const vhost = require("vhost");
const express = require("express");
const app_one = require("./app_one");
const app_two = require("./app_two");
express()
  .use(vhost(`specdown.com`, app_one))
  .use(vhost(`admin.specdown.com`, app_two));
