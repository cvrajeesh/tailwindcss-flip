"use strict";

const flatMap = require("lodash.flatmap");

module.exports = function ({ addUtilities, theme, variants }) {
  const generators = [
    (size, modifier) => ({
      [`[dir=rtl] .pr-${modifier}`]: {
        "padding-left": `${size}`,
        "padding-right": "unset",
      },
      [`[dir=rtl] .pl-${modifier}`]: {
        "padding-left": "unset",
        "padding-right": `${size}`,
      },
    }),
  ];

  const utilities = flatMap(generators, (generator) => {
    return flatMap(theme("padding"), generator);
  });

  addUtilities(utilities, variants("padding"));
};
