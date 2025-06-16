/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject = any> {
      /**       
     * Navega até a página de login, acessa a plataforma com credencias válidas..
     * * Passos do comando:
     * 1. Visita a página de Login.  
     * 2. Preenche o campo nome, com um valor válido.
     * 3. Preenche o campo senha, com uma senha válida.
     * 4. Clica no login.
     * 
     * @example
     * cy.login()
     */
       Login(): Chainable<Subject>;

    }
  }
  