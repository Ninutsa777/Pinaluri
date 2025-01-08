import data from '../fixtures/zoo.json'

describe('zoo', () => {
  it('testzootopia', () => {
    cy.visit('https://testzootopia.loremipsum.ge/ka/register')
    cy.get('.menu-pop > .rprof').click()
    cy.get('.input-shablon > p > a').click()
    cy.get('[name="first_name"]').type(data['name and lasName'])
    cy.get('[name="reg_email"]').type (data.email)
    cy.get('[name="personal_id"]').type(data.piradinomeri)
    cy.get('[name="phone"]').type(data.mobile)
    cy.get('[name="reg_password"]').type(data.password)
    cy.get('[name="reg_password_confirmation"]').type(data.password)
    
    
    



  })
})

describe('zoo', () => {
  it('testzootopia', () => {
    const userData = {
      'name and lasName': 'lika kldiashvili',
      email: 'lika@gmail.com',
      piradinomeri: '12345678901',
      mobile: '555123456',
      password: 'lika123'
    };

    // Custom Command-ის გამოყენება
    cy.registerUser(userData);
  });
});


