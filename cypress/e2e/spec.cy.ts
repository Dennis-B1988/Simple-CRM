describe('Page loading', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:4200')
  })
})


describe('Dashboard', () => {
  it('successfully loads', () => {
    cy.visit('/dashboard')
  })
})


describe('Users', () => {
  it('successfully loads', () => {
    cy.visit('/user')
  })
})
