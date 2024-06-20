/// <reference types="cypress" />

describe('Testando a agenda', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve renderizar 3 contatos', () => {
        cy.get('header > h2').should('contain.text', '3 contatos na agenda')
    })

    it('Deve adicionar um contato', () => {
        cy.get('input').first().type('Edmar Augusto')
        cy.get('input').eq(1).type('edmar@gmail.com')
        cy.get('input').last().type('(31)912345678')
        cy.get('.adicionar').click()

        cy.get('header > h2').should('contain.text', '4 contatos na agenda')
    })

    it('Deve remover um contato', () => {
        cy.get('.delete').first().click()

        cy.get('header > h2').should('contain.text', '3 contatos na agenda')
    })
})