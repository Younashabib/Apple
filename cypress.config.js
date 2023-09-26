const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "pxeseg",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    excludeSpecPattern: "cypress/e2e/1-getting-started",
    excludeSpecPattern: "cypress/e2e/2-advanced-examples",
    specPattern: "cypress/e2e/**/*spec.{js,jsx,ts,tsx,feature}",
    supportFile: "cypress/support/e2e.{js,jsx,ts,tsx}",
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    video: true,
    viewportHeight: 1200,
    viewportWidth: 1920,
    baseUrl: "https://www.jetbrains.com/",
  },
});
