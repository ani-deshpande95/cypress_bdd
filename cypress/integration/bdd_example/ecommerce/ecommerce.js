import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import LoginPageLocators from "../../../pageobjects/locators/loginpagelocators";
import HomePageLocators from "../../../pageobjects/locators/homepagelocators";
import ProductPageLocators from "../../../pageobjects/locators/productpagelocators";
import * as loginPage from "../../../pageobjects/pages/loginpage";
import * as homePage from "../../../pageobjects/pages/homepage";
import * as cartPage from "../../../pageobjects/pages/cartpage";

const baseUrl = Cypress.config().baseUrl;
const homePageLoc = new HomePageLocators();
const loginPageLoc = new LoginPageLocators();
const productPageLoc = new ProductPageLocators();


Given("User visit the ecommerce site", function () {
  cy.logTestStep("Visit the URL");
  cy.visit(baseUrl);
  homePageLoc.getHomePageLogo().should("be.visible");
});

When("User enters the username and password", function () {
  cy.logTestStep("Validate user login");
  loginPage.userLogin({
    username: this.data.testUserName,
    password: this.data.testUserPassword,
  });
});

When("User clicks on login button", function () {
  loginPageLoc.getLoginBtn().click();
});

Then("User should navigate to user page", function () {
  cy.logTestStep("Verify user logged in correctly");
  loginPage.validateLogin(this.data.testUserName);
});

When("User click on product name", function () {
  homePage.validateProductPage(this.data.productName);
});

When("User click on add to cart button", function () {
  productPageLoc.getAddToCartBtn().click();
  cy.on("window:alert", (txt) => {
    expect(txt).to.contains("Product added");
  });
});

Then("Product should be visible on cart page", function () {
  cartPage.validateProductOnCartPage(this.data.productName);
});

When("User click on contacts link", function () {
  homePageLoc.getContactsLink().click()
  homePageLoc.getContactsPopUpEmailTxtBox().should('be.visible')
});

When("User enters the email ID and name", function(dataTable) {
  cy.wait(1000)
  homePageLoc.getContactsPopUpEmailTxtBox().type(dataTable.rowsHash().email)
  cy.wait(1000)
  homePageLoc.getContactsPopUpNameTxtBox().type(dataTable.rowsHash().name)
})

Then("user click on send message button", function() {
  homePageLoc.getContactsSendMsgBtn().click()
  cy.on("window:alert", (txt) => {
    expect(txt).to.contains("Thanks for the message!!");
  });
})
