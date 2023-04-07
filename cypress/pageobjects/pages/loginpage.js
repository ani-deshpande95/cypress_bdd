import LoginPageLocators from "../locators/loginpagelocators";

const loginPageLoc = new LoginPageLocators();

export function userLogin({ username, password }) {
  loginPageLoc.getLoginLnk().click();
  loginPageLoc.getLoginModal().should("be.visible");
  loginPageLoc
    .getLoginUserNameTxtBox()
    .focus()
    .click()
    cy.wait(1000)
    .then(() => {
      loginPageLoc.getLoginUserNameTxtBox().type(username, { typeDelay: 5000 });
      cy.wait(1000)
    })
    .then(() => {
      loginPageLoc.getLoginPasswordTxtBox().click().type(password);
    });
}

export function validateLogin(username) {
  loginPageLoc.getUsernameLnk().should("contain.text", username);
  loginPageLoc.getLogoutLnk().should("be.visible");
}
