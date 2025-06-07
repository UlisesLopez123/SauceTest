const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      config.env.base_url = 'https://www.saucedemo.com/';
      config.env.username = 'standard_user';
      config.env.password = 'secret_sauce'

      return config
    },
  },
});
