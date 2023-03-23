Feature: To test the ecommerce website using BDD

    @Smoke
    Scenario: Verify user is able to login
    Given User visit the ecommerce site
    When User enters the username and password
    When User clicks on login button
    Then User should navigate to user page

    @Regression
    Scenario: Verify user is able to add item to cart
    Given User visit the ecommerce site
    When User click on product name
    When User click on add to cart button
    Then Product should be visible on cart page

    @Regression
    Scenario Outline: to demo the datatable usage in bdd
    Given User visit the ecommerce site
    When User click on contacts link
    When User enters the email ID and name
        |email| <email> |
        |name| <name> |
    Then user click on send message button

    Examples:
        | email | name |
        | test@test.com | test  |
        | cybage@test.com| cybage |