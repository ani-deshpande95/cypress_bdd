
import CartPageLocators from "../locators/cartlocators";

const cartPageLoc = new CartPageLocators()

export function validateProductOnCartPage(productName) {
    cartPageLoc.getCartPageLnk().click()
    cartPageLoc.getProductTable().should('be.visible')
    cartPageLoc.getCartProduct(productName).should('be.visible')
}