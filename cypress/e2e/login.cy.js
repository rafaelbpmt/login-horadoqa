describe('Hora do QA Tests', () => {
  
  it('login - success', () => {
    cy.visit('https://horadoqa.github.io/login/')
    cy.get('#username').type('usuario@example.com')
    cy.get('#password').type('1q2w3e4r')
    cy.get('#button').click()
  })

  it('login - wrong email', () => {
    cy.visit('https://horadoqa.github.io/login/')
    cy.get('#username').type('usuarioteste@example.com')
    cy.get('#password').type('1q2w3e4r')
    cy.get('#button').click()
  })

  it('login - wrong password', () => {
    cy.visit('https://horadoqa.github.io/login/')
    cy.get('#username').type('usuario@example.com')
    cy.get('#password').type('1q2w3e4rteste')
    cy.get('#button').click()
  })

})



