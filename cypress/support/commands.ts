/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Quiz Application Custom Commands
Cypress.Commands.add('startQuiz', () => {
    cy.findByRole('button', { name: /start quiz/i }).click()
  })
  
  Cypress.Commands.add('answerQuestion', () => {
    cy.findByRole('button').first().click()
  })
  
  Cypress.Commands.add('completeQuiz', () => {
    cy.startQuiz()
    for(let i = 0; i < 10; i++) {
      cy.answerQuestion()
    }
  })
  
  declare global {
    namespace Cypress {
      interface Chainable {
        startQuiz(): Chainable<void>
        answerQuestion(): Chainable<void>
        completeQuiz(): Chainable<void>
      }
    }
  }
  
  export {}