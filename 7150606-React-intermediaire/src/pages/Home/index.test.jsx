import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { ThemeProvider, SurveyProvider } from '../../utils/context'
import Home from '.'

describe('Home component', () => {
  it('should render title', () => {
    render(
      <MemoryRouter>
        <ThemeProvider>
          <SurveyProvider>
            <Home />
          </SurveyProvider>
        </ThemeProvider>
      </MemoryRouter>
    )
    // screen.debug()
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents',
      })
    ).toBeTruthy()
  })
})
