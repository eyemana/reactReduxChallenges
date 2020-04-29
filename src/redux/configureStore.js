if (process.env.NODE_ENV === "production") {
  module.exports = require("./configureStore.prod");
} else {
  module.exports = require("./configureStore.dev");
}

// dynamically loading the appropriate file at build time using CommonJS syntax for import/export.
