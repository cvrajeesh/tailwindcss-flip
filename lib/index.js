"use strict";

const padding = require("./padding");
const margin = require("./margin");
const prose = require("./prose");

module.exports = function (opts) {
  padding(opts);
  margin(opts);
  prose(opts);
};
