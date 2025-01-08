Cypress.Commands.add('registerUser', (data) => {
    cy.visit('https://testzootopia.loremipsum.ge/ka');
    cy.get('.menu-pop > .rprof').click();
    cy.get('.input-shablon > p > a').click();
    cy.get('[name="first_name"]').type(data['name and lasName']);
    cy.get('[name="reg_email"]').type(data.email);
    cy.get('[name="personal_id"]').type(data.piradinomeri);
    cy.get('[name="phone"]').type(data.mobile);
    cy.get('[name="reg_password"]').type(data.password);
    cy.get('[name="reg_password_confirmation"]').type(data.password);
  });
    