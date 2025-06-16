import { generateUser } from '../support/fakeData';


describe('Shopping cart ', () => {
  it('You must add a product, complete the purchase and validate the summary.', () => {
    const user = generateUser();
   

    // Login
    cy.login();

    // Adicionar produto ao carrinho
    cy.get('[data-test="item-4-title-link"]').should('be.visible');
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="shopping-cart-link"]').click();

    // Iniciar checkout
    cy.get('[data-test="checkout"]').click();

    // Preencher informações de checkout
    cy.get('[data-test="firstName"]').type(user.firstname);
    cy.get('[data-test="lastName"]').type(user.lastname);
    cy.get('[data-test="postalCode"]').type(user.postalcode);
    cy.get('[data-test="continue"]').click();

    // Validar resumo de pagamento
    cy.get('[data-test="payment-info-value"]').should('be.visible');
    cy.get('[data-test="subtotal-label"]').should('be.visible');

    // Finalizar compra
    cy.get('[data-test="finish"]').click();

    // Validar confirmação de pedido
    cy.get('[data-test="pony-express"]').should('be.visible');

    // Voltar para os produtos
    cy.get('[data-test="back-to-products"]').click();
  });
});