import Quiz from '../../client/src/components/Quiz'

describe('Quiz Component', () => {
  beforeEach(() => {
    cy.mount(<Quiz />)
  })

  it('renders the start button', () => {
    cy.get('button').contains('Start Quiz').should('exist')
  })
})