import data from '../fixtures/zoo.json'

describe('zoo', () => {
    it('testzootopia', () => {
      cy.visit('https://testzootopia.loremipsum.ge/ka')
      cy.get('.menu-pop > .rprof').click()
      cy.get('[name="login_email"]').type (data.email)
      cy.get('[name="login_password"]').type(data.password)
      cy.get('.avtorization > .input-shablon > .form-button').click()

    })
})