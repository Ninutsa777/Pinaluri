import data from '../fixtures/zoo.json'

describe('zoo', () => {
    it('testzootopia', () => {
      cy.visit('https://testzootopia.loremipsum.ge/ka')
      cy.get('.menu-pop > .rprof').click()
      cy.get('[name="login_email"]').type (data['reg.mail'])
      cy.get('[name="login_password"]').type(data['reg.pass'])
      cy.get('.avtorization > .input-shablon > .form-button').click()
      cy.get('.pug > .seepro').click()
      cy.get('.product-list > :nth-child(1)').click()
      cy.get('.add-pro').click()

    })
})