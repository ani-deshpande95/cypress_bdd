const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./cypress/reports/",
  reportPath: "./cypress/reports",
  metadata: {
    browser: {
      name: "chrome",
      version: "111",
    },
    device: "Local test machine",
    platform: {
      name: "ubuntu",
      version: "20.04 LTS",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Cypress_BDD" },
      { label: "Release", value: "1.0" },
      { label: "Cycle", value: "1.0" }
    ],
  },
});