/// <reference types="cypress"/>

const { faker } = require('@faker-js/faker');


describe('Funcionalidade Pré Cadastro', () => {
    
    beforeEach(() => {
        cy.visit('minha-conta/')
        
    });
          
    it('Deve completar o pré cadastro com sucesso', () => {

        let nomefaker = faker.name.firstName()
        let sobrenomefaker = faker.name.lastName()
        let emailFaker = faker.internet.email(nomefaker,sobrenomefaker)
        let passwordFaker = faker.internet.password()
      

        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type(passwordFaker)
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomefaker)
        cy.get('#account_last_name').type(sobrenomefaker)
        cy.get('.woocommerce-Button').click()
        
        cy.get('.woocommerce-message').should('contain', 'modificados')

    });

        
        it('Completar o pré-cadastro com sucesso usando comandos customizados', () => {

            let nomefaker = faker.name.firstName()
            let sobrenomefaker = faker.name.lastName()
            let emailFaker = faker.internet.email()
            let passwordFaker = faker.internet.password()
    
            cy.preCadastro(emailFaker,passwordFaker,nomefaker, sobrenomefaker)

            cy.get('.woocommerce-message').should('contain', 'modificados')
            
        });

               
    
});