/// <reference types="cypress"/>

describe('Funcionalide na pagina de produtos', () => {

    beforeEach(() => {
        cy.visit('produtos/')

    });
    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]').eq(5).click()
    });

    it('Adicionar um item ao carrinho', () => {
      
        var quantidade = 2

        cy.get('[class="product-block grid"]').eq(0).click()
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Abominable Hoodie”' )


    });

    it('Deve adicionar produto ao carrinho = Comando customizado', () => {
        cy.addProdutos('Abominable Hoodie', 'M', 'Blue', 2)
        
    });
});

