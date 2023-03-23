export default class CartPageLocators {
    getCartPageLnk() {
        return cy.get('[id="cartur"]')
    }
    getProductTable() {
        return cy.get('[class="success"]')
    }
    getCartProduct(productName) {
        return cy.get(`[class="success"] td:contains(${productName})`)
    }
}
