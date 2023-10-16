class EnderecoPage {

    editarEnderecoFaturamento() {
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(1) > .title > .edit').click()

        cy.get('#billing_first_name').clear().type('Adrielle')
        cy.get('#billing_last_name').clear().type('Qualidade')
        cy.get('#billing_company').clear().type('Ebac')

        cy.get('#select2-billing_country-container').clickk().type('Brasil').select()




    }
    editarEnderecoEntrega() {
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(1) > .title > .edit').click()

        cy.get('#billing_first_name').clear().type('Adrielle')
        cy.get('#billing_last_name').clear().type('Qualidade')
        cy.get('#billing_company').clear().type('Ebac')

    }

}

export default new EnderecoPage()