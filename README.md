# Projeto de Testes E2E com Cypress, JavaScript e Allure

Este projeto automatiza testes end-to-end (E2E) utilizando **Cypress** com **JavaScript**, integrando relatórios avançados com o **Allure Reporter**. Utiliza a biblioteca **Faker** para geração de dados dinâmicos e comandos customizados para melhorar a reutilização e legibilidade dos testes. A tipagem dos comandos é feita via **index.d.ts** para melhor documentação e experiência no VSCode.

---

## Tecnologias e Ferramentas Utilizadas

- [Cypress](https://www.cypress.io/) – Framework para testes E2E  
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) – Linguagem utilizada nos testes  
- [Allure Reporter](https://docs.qameta.io/allure/) – Geração de relatórios detalhados e visuais  
- [Faker](https://github.com/faker-js/faker) – Geração de dados fake para testes (nomes, emails, endereços, etc)  
- Comandos customizados do Cypress – Para simplificar ações repetitivas e documentar passos  
- Tipagem via `index.d.ts` – Para autocompletar e documentação inline no VSCode  

---

## Estrutura do Projeto

/cypress
/e2e - Testes E2E escritos em JavaScript
/support - Arquivos de suporte como comandos customizados e configuração do Allure
/fixtures - Dados estáticos para testes, se necessário
/index.d.ts - Declaração e documentação dos comandos customizados para melhor DX (Developer Experience)
/cypress.config.js - Configuração do Cypress e integração com Allure
/package.json - Dependências e scripts do projeto

## Como rodar os testes

1. Instale as dependências:

```bash
npm install

Execute os testes no modo headless e gere resultados para o Allure:
npx cypress run --env allure=true

Gere o relatório Allure:
allure generate allure-results --clean -o allure-report

Abra o relatório no navegador:
allure open allure-report

Vantagens das ferramentas e práticas adotadas
Cypress + JavaScript
Permite testes rápidos e confiáveis no frontend, com fácil integração e manutenção.

Faker
Gera dados realistas e variados para os testes, evitando dados estáticos e repetitivos.

Comandos Customizados
Aumentam a legibilidade e reutilização dos testes, centralizando ações comuns.

index.d.ts
Documenta e tipa os comandos customizados, ajudando na autocompletação e prevenção de erros.

Allure Reporter
Gera relatórios ricos, com passos detalhados, anexos e histórico, facilitando a análise dos resultados.


Contato
Para dúvidas ou sugestões, entre em contato:
Fabiana Alves  – fabianasilva.analystqa@gmail.com