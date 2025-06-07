import { Elements } from "../elements/elements"

describe('Login Tests', () => {
  beforeEach(() => {
    cy.login()
  })
  
  it('is possible to login with valid credentials', () => {
    Elements.login.pageHeader().should('contain', 'Swag Labs')
    cy.url().should('include', '/inventory.html')
  })
})