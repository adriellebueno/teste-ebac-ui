class EnderecoPage {

    editarEnderecoFaturamento() {

        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(1) > .title > .edit').click()

        cy.get('#billing_first_name').clear().type('Adrielle')
        cy.get('#billing_last_name').clear().type('Qualidade')
        cy.get('#billing_company').clear().type('Ebac')


    }
    editarEndercoEntrega() {
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(1) > .title > .edit').click()

        cy.get('#billing_first_name').clear().type('Adrielle')
        cy.get('#billing_last_name').clear().type('Qualidade')
        cy.get('#billing_company').clear().type('Ebac')

    }

}
