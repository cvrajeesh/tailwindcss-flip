"use strict";

const padding = require("./padding");
const margin = require("./margin");

module.exports = function (opts) {
  padding(opts);
  margin(opts);
};
