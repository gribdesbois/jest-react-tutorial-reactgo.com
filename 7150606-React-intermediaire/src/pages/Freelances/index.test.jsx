import { rest } from 'msw'
import setupServer from 'msw/node'
import { waitFor, screen } from '@testing-library/react'
import { render } from '../../utils/test'

import Freelances from '.'
import { ThemeProvider, SurveyProvider } from '../../utils/context'

const freelancersMockedData = [
  {
    name: 'Harry Potter',
    job: 'Magicien frontend',
    picture: '',
  },
  {
    name: 'Hermione Granger',
    job: 'Magicienne fullstack',
    picture: '',
  },
]

const server = setupServer(
  rest.get('http://localhost:8000/freelances', (req, res, ctx) =>
    res(ctx.json({ freelancersList: freelancersMockedData }))
  )
)

// Activate API simulation before test from server
beforeAll(() => server.listen())
// Re initialize what might have been added before every test
afterEach(() => server.resetHandlers())

// Close API simulation once tests are over
afterAll(() => server.close())

it('should render without a crash', async () => {
  render(<Freelances />)
  expect(screen.getByTestId('loader')).toBeTruthy()
})
