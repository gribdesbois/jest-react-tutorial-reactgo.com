import { render, screen, fireEvent } from '@testing-library/react'
import Footer from "."
import { ThemeProvider } from '../../utils/context'

describe('Footer', ()=> {
  it('should render without crash', async()=> {
    render(
      <ThemeProvider>
        <Footer />
      </ThemeProvider>
    )
  })
})

describe('Change theme', ()=> {
  it('should change the theme', async()=>{
    render(
      <ThemeProvider>
        <Footer />
      </ThemeProvider>
    )
    const nightModeButton = screen.getByRole('button')
    expect(nightModeButton.textContent).toBe('Changer de mode : ☀️')
    fireEvent.click(nightModeButton)
    expect(nightModeButton.textContent).toBe('Changer de mode : 🌙')
  })
})

