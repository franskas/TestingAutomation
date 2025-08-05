import 'cypress-mochawesome-reporter/register';

describe('Login Test - SauceDemo', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
  })

  //Testcase : Verify Login - Valid User
  it('Verify Login - Valid User', () => {
  //Input username
  cy.get('#user-name').type('standard_user')

  //Input password
  cy.get('#password').type('secret_sauce')

  //Klik button
  cy.get('#login-button').click()

  // Verifikasi login berhasil dengan cek keberadaan elemen inventaris
    cy.url().should('include', '/inventory')
    cy.get('.inventory_list').should('be.visible')
  })

  //Testcase : Verify Login - Invalid User
  it('Verify Login - Invalid User', () => {
  //Input username
  cy.get('#user-name').type('standard_user')

  //Input password
  cy.get('#password').type('123')

  //Klik button
  cy.get('#login-button').click()
  })

  //Testcase : Verify Login - Locked User
  it('Verify Login - Locked User', () => {
  //Input username
  cy.get('#user-name').type('locked_out_user')

  //Input password
  cy.get('#password').type('secret_sauce')

  //Klik button
  cy.get('#login-button').click()
  })

  //Testcase : Verify Logout
  it('Verify Logout',() => {
  cy.get('#user-name').type('standard_user')

  cy.get('#password').type('secret_sauce')

  cy.get('#login-button').click()

  cy.contains('button', 'Open Menu').click()

  cy.get('#logout_sidebar_link').click()

  // Verifikasi login berhasil dengan cek keberadaan elemen inventaris
    cy.url().should('include', '/index')
  })
})