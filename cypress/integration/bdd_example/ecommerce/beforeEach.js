
const dataFilePath = Cypress.env("environment");

before("To fetch the data", function () {
    cy.logTestStep("Fetch the user data");
    cy.fixture(dataFilePath).then((data) => {
      this.data = data;
    });
  });