Feature: User Login and Product Purchase on https://www.saucedemo.com/
    As a customer
    I want to log in, add an item to my cart, and complete the checkout process
    So that I can purchase products on the Sauce Demo website

    Scenario: Successful checkout process
        Given The user is on the login page
        When The user enters valid login credentials and click the login button
        When The user has selected a product to purchase and clicks on the Add to Cart button
        When The user clicks on the Cart icon
        When The user clicks on the Checkout button
        When The user enters the required details
        When The user clicks on the Finish button
        Then The user should see a confirmation page indicating that the order was successfull