import HomePageLocators from "../locators/homepagelocators";
import ProductPageLocators from "../locators/productpagelocators";

const homePageLoc = new HomePageLocators()
const productPageLoc = new ProductPageLocators()

export function validateProductPage(productName) {
    homePageLoc.getProductCard(productName).click()
    productPageLoc.getProductPage().should('be.visible')
    productPageLoc.getProductName().should('contain.text', productName)
    productPageLoc.getAddToCartBtn().should('be.visible')
}