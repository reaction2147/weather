import { render, screen, cleanup } from '@testing-library/react';
import Error from '../components/error';

afterEach(cleanup)

it("renders", () => {
  const {asFragment} = render(<Error />)
  expect(asFragment()).toMatchSnapshot()
})

it("has text", () => {
    const {getByTestId} = render(<Error />)
    expect(getByTestId("title")).toHaveTextContent("ERROR")
  })
  
  it("has text", () => {
    const {getByTestId} = render(<Error />)
    expect(getByTestId("sub_title")).toHaveTextContent("Please enter a valid location")
  })