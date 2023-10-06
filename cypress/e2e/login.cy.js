/// <reference types="cypress"/>
const perfil = require('../fixtures/perfil.json')


context('Funcionalidade Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
        
    });
      
    afterEach(() => {
        cy.screenshot()
        
    });
          
    it('Deve realizar login com sucesso', () => {
        
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain','Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá')


    });
    it('Deve realizar login com sucesso - Utilizando arquivo de teste', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain','Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá')
    });

    it.only('Deve fazer o login com sucesso - Usando fixture', () => {
        cy.fixture('perfil').then(dados => { cy.get('#username').type(dados.usuario)
        cy.get('#password').type(dados.senha,{log: false})
        cy.get('.woocommerce-form > .button').click() })
    });

    it('Deve apresentar mensagem de erro ao inserir email inválido', () => {
        
        cy.get('#username').type('aluno_ec@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        
        cy.get('.woocommerce-error > li').should('contain','desconhecido')

        
    })
    
    it('Deve apresentar mensagem de erro ao inserir senha inválido', () => {
       
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain','senha')

        
        
    });

});