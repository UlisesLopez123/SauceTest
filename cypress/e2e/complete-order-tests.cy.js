import { Elements } from "../elements/elements"
import Inventory from "../pages/swagLabs.spec"

describe('Add Order Tests', () => {
  beforeEach(() => {
    cy.login()
  })
  
  it('is possible to login with valid credentials', () => {
    Inventory.select_order('bike')
    Inventory.select_order('tshirt')
    Inventory.go_shopping_cart()
    Inventory.complete_order('test', 'test', 'test')
    Elements.checkout.orderCompleted().should('contain', 'Thank you for your order!')
  })
})