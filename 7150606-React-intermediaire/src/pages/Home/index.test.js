import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import {ThemeProvider, SurveyProvider} from "../../utils/context"
import Home from '.'

describe('Home component', () => {
  it('should render without crash', () => {
    render(
      <MemoryRouter>
        <ThemeProvider>
          <SurveyProvider>
            <Home />
          </SurveyProvider>
        </ThemeProvider>
      </MemoryRouter>
    )
  })
})
