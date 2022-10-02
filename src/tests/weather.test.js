import { render, screen, cleanup } from '@testing-library/react';
import Weather from '../components/error';

afterEach(cleanup)

it("renders", () => {
  const {asFragment} = render(<Weather />)
  expect(asFragment()).toMatchSnapshot()
})