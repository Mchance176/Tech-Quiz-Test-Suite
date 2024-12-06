// Custom command to start a new quiz
Cypress.Commands.add('startQuiz', () => {
    cy.get('button').contains('Start Quiz').click()
  })
  
  // Custom command to answer a question
  Cypress.Commands.add('answerQuestion', () => {
    cy.get('.btn-primary').first().click()
  })
  
  // Custom command to complete entire quiz
  Cypress.Commands.add('completeQuiz', () => {
    cy.startQuiz()
    for(let i = 0; i < 10; i++) {
      cy.answerQuestion()
    }
  })
  
  // Declare the commands to TypeScript
  declare global {
    namespace Cypress {
      interface Chainable {
        startQuiz(): Chainable<void>
        answerQuestion(): Chainable<void>
        completeQuiz(): Chainable<void>
      }
    }
  }