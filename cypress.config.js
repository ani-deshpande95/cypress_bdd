const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

module.exports = defineConfig({
  projectId: "7mvsuz",
  e2e: {
    async setupNodeEvents(on, config) {
      await preprocessor.addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor", browserify.default(config));
      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    },
    specPattern: 'cypress/integration/features/*.feature',
    baseUrl: 'https://www.demoblaze.com/',
    viewportWidth: 1024,
    viewportHeight: 720,
    defaultCommandTimeout: 20000
  },
});
