
describe('Cypress Tests', () => {
  // it('passes', () => {
  //   cy.visit('https://example.cypress.io')
  // })

    it('API', () => {
   // cy.visit('https://example.cypress.io')
    cy.request({
      METHOD: 'GET',
      url: 'https://api.restful-api.dev/objects/6'
    })
    .then((response) => {
    expect(response.status).to.equal(200)
    expect(response.body.name).to.equal('Apple AirPods')
  })

    it.only('Front - Login', () => {
   //cy.visit('https://example.cypress.io')
     cy.visit('https://demo.sylius.com/en_US/')


    })

     it('passes', () => {
     cy.visit('https://demo.sylius.com/en_US/')
   })
})
})