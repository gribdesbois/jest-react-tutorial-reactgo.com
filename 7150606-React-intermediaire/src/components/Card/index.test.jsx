import { render, screen, fireEvent } from '@testing-library/react'
import Card from '.'
import { ThemeProvider } from '../../utils/context'

describe('Card', () => {
  it('should render title and image', async () => {
    render(
      <ThemeProvider>
        <Card
          title="Harry Potter"
          label="Magicien frontend"
          picture="/myPicture.png"
        ></Card>
      </ThemeProvider>
    )
    const cardPicture = screen.getByRole('img')
    const cardTitle = screen.getByText(/Harry/i)
    expect(cardPicture.src).toBe('http://localhost/myPicture.png')
    expect(cardTitle.textContent).toBe('Harry Potter')
  })
  it('should add ⭐️ around title on Click', async () => {
    render(
      <ThemeProvider>
        <Card
          title="Harry Potter"
          label="Magicien Frontend"
          picture="/myPicture.png"
        ></Card>
      </ThemeProvider>
    )
    const cardTitle = screen.getByText(/Harry/i)
    const parentNode = cardTitle.closest('div')
    fireEvent.click(parentNode)
    // screen.debug()
    expect(cardTitle.textContent).toBe('⭐️ Harry Potter ⭐️')
  })
})
