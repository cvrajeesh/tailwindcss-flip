"use strict";

const flatMap = require("lodash.flatmap");

module.exports = function ({ addUtilities, theme, variants }) {
  const generators = [
    (size, modifier) => ({
      [`[dir=rtl] .mr-${modifier}`]: {
        "margin-left": `${size}`,
        "margin-right": "unset",
      },
      [`[dir=rtl] .ml-${modifier}`]: {
        "margin-left": "unset",
        "margin-right": `${size}`,
      },
    }),
  ];

  const utilities = flatMap(generators, (generator) => {
    return flatMap(theme("margin"), generator);
  });

  addUtilities(utilities, variants("margin"));
};
