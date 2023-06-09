const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

module.exports = defineConfig({
  projectId: '7mvsuz',
  e2e: {
    async setupNodeEvents(on, config) {
      // implement node event listeners here
      // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
      await preprocessor.addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor", browserify.default(config));
      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    },
    specPattern: 'cypress/integration/bdd_example/*.feature',
    baseUrl: 'https://www.demoblaze.com/',
    viewportWidth: 1920,
    viewportHeight: 1080
  },
});
