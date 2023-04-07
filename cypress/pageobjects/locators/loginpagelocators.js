export default class LoginPageLocators {
    getLoginModal() {
        return cy.get('[id="logInModalLabel"]')
    }
    getLoginLnk() {
        return cy.get('[data-target="#logInModal"]')
    }
    getLoginUserNameTxtBox() {
        return cy.get('input[id="loginusername"]')
    }
    getLoginPasswordTxtBox() {
        return cy.get('[id="loginpassword"]')
    }
    getLoginBtn() {
        return cy.get('[onclick="logIn()"]')
    }
    getUsernameLnk() {
        return cy.get('[id="nameofuser"]')
    }
    getLogoutLnk() {
        return cy.get('[id="logout2"]')
    }
}