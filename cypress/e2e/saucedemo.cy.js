import { generateUser } from '../support/fakeData';


describe('Fluxo de Compra - Adicionar produto e finalizar pedido ', () => {
  it('Deve permitir que o usuário adicione um produto ao carrinho e conclua a compra com sucesso.', () => {
    const user = generateUser();
   

    // Login
    cy.Login();

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