export default class ProductPageLocators {
    getProductPage() {
        return cy.get('[class*="product-deatil"]')
    }
    getProductName() {
        return cy.get('[class="name"]')
    }
    getAddToCartBtn() {
        return cy.get('[class*="btn-success"]')
    }
}