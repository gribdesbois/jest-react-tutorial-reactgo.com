import react from 'react'
import {renderer} from 'react-test-renderer'

//to test
import App from '../App'


//tests
test('Renders main page correctly', () => {
  //setup
  renderer(<App/>)

  //Pre expectations

  //Init

  //Post expectations
  expect(true).toBeTruthy()
})