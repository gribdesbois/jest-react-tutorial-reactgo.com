import { render } from '@testing-library/react'
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