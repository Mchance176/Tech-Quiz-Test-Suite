describe('Tech Quiz E2E', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5175') // Updated port
  })

  it('should start the quiz', () => {
    cy.startQuiz()
    cy.get('.card').should('exist')
  })

  it('should complete a full quiz', () => {
    cy.completeQuiz()
    cy.contains('Quiz Completed').should('exist')
  })
})