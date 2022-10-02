import { render, screen, cleanup } from '@testing-library/react';
import App from '../App';

afterEach(cleanup)

it("renders", () => {
  const {asFragment} = render(<App />)
  expect(asFragment()).toMatchSnapshot()
})

it("has text", () => {
  const {getByTestId} = render(<App />)
  expect(getByTestId("instructions")).toHaveTextContent("Enter your location to get todays weather")
})
