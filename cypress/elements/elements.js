export class Elements {

    static login = {
        usernameField: () => cy.get('[data-test="username"]'),
        passwordField: () => cy.get('[data-test="password"]'),
        loginButton: () => cy.get('[data-test="login-button"]'),
        pageHeader: () => cy.get('[data-test="primary-header"]'),
        loginContainer: () => cy.get('[data-test="login-container"]')
    }

    static mainPage = {
        shoppingLink: () => cy.get('[data-test="shopping-cart-link"]'),
        inventoryItem: () => cy.get('[data-test="inventory-item"]'),
        inventoryItemName: () => cy.get('[data-test="inventory-item-name"]'),
        inventoryItemPrice: () => cy.get('[data-test="inventory-item-price"]'),
        addCardButtonBackpack: () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
        addCardButtonBikeLight: () => cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]'),
        addCardButtonTShirt: () => cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]'),
        addCardButtonFleeceJacket: () => cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]')
    }

    static checkout = {
        checkoutButton: () => cy.get('[data-test="checkout"]'),
        firstName: () => cy.get('[data-test="firstName"]'),
        lastName: () => cy.get('[data-test="lastName"]'),
        zipCode: () => cy.get('[data-test="postalCode"]'),
        continueButton: () => cy.get('[data-test="continue"]'),
        finishButton: () => cy.get('[data-test="finish"]'),
        orderCompleted: () => cy.get('[data-test="complete-header"]')
    }

    static hamburguerButton = {
        burguerButton: () => cy.get('#react-burger-menu-btn'),
        logoutButton: () => cy.get('[data-test="logout-sidebar-link"]')
    }

}