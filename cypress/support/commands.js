

Cypress.Commands.add('login', () => {
    const username = Cypress.env('username')
    const password = Cypress.env('password')
    const baseUrl = Cypress.env('base_url')

    cy.visit(baseUrl)
    cy.get('[data-test="username"]').type(username)
    cy.get('[data-test="password"]').type(password)
    cy.get('[data-test="login-button"]').click()
})