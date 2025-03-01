describe('Hora do QA - Tests', () => {
  it('login with empty email', () => {
    cy.visit('https://horadoqa.github.io/login/')
    cy.get('#password').type('1q2w3e4r')
    cy.get('#button').click()
  })
  
  it('login with empty password', () => {
    cy.visit('https://horadoqa.github.io/login/')
    cy.get('#username').type('usuarioteste@example.com')
    cy.get('#button').click()
  })

  it('login with empty fields', () => {
    cy.visit('https://horadoqa.github.io/login/')
    cy.get('#button').click()
  })

})