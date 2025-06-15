describe('Login Flow', () => {
  it('Should login with valid credentials', () => {
    cy.visit('https://example.com/login');
    cy.get('#username').type('validUser');
    cy.get('#password').type('validPassword');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
  });
});
