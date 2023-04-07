// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Login command
Cypress.Commands.add("login", (email, password) => {});

// wait command
Cypress.Commands.add("sleep", (timeout) => {
  cy.wait(timeout);
});

//Logging
Cypress.Commands.add("logTestStep", (logMessage) => {
  cy.log("**--------------------------------**");
  cy.log(`**${logMessage}**`);
  cy.log("**--------------------------------**");
});
