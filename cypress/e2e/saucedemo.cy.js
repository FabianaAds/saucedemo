import { generateUser } from '../support/fakeData';



describe('Saucedemo ', () => {
  it('Login in saucedemo', () => {
    const user = generateUser();
    cy.login();
    cy.get('[data-test="item-4-title-link"]').should('be.visible');
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type(user.firtsname);
    cy.get('[data-test="lastName"]').type(user.fullname);
    cy.get('[data-test="postalCode"]').type('18150000');
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="payment-info-value"]').should('be.visible');
    cy.get('[data-test="subtotal-label"]').should('be.visible');
    cy.get('[data-test="finish"]').click();
    cy.get('[data-test="pony-express"]').should('be.visible');
    cy.get('[data-test="back-to-products"]').click();

  });
});




  