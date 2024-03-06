
describe('Cypress Tests', () => {
    it('API', () => {
    cy.request({
      METHOD: 'GET',
      url: 'https://api.restful-api.dev/objects/6'
    })
    .then((response) => {
    expect(response.status).to.equal(200)
    expect(response.body.name).to.equal('Apple AirPods')
    })
    })
    
    it('User should be able to login and logout', () => {
       cy.visit ('https://demo.sylius.com/en_US/login')

       //fill credentials
      cy.get ('#_username').type('shop@example.com')
      cy.get ('#_password').type('sylius')

        //Click LOGIN
      cy.get('.button').contains('Login').click()

        //click logout
      cy.get('.sylius-logout-button').contains('Logout').click()

    })

  //    it('passes', () => {
  //    cy.visit('https://demo.sylius.com/en_US/')
  //  })

  // it('passes', () => {
  //   cy.visit('https://example.cypress.io')
  // })
})