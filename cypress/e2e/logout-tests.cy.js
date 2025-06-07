import Logout from "../pages/logout.spec"
import { Elements } from "../elements/elements"

describe('Logout Tests', () => {
  beforeEach(() => {
    cy.login()
  })
  
  it('is possible to logout of the app', () => {
    Logout.logout()
    Elements.login.loginContainer().should('exist')
  })
  
})