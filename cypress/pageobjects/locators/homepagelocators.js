
export default class HomePageLocators {
    getHomePageLogo() {
        return cy.get('[class="navbar-brand"]')
    }
    getProductCard(productName) {
        return cy.get(`[class="card-title"]:contains(${productName})`)
    }
    getContactsLink() {
        return cy.get('[data-target="#exampleModal"]')
    }
    getContactsPopUpEmailTxtBox() {
        return cy.get('[id="recipient-email"]')
    }
    getContactsPopUpNameTxtBox() {
        return cy.get('[id="recipient-name"]')
    }
    getContactsSendMsgBtn() {
        return cy.get('[onclick="send()"]')
    }
}