import React from 'react';
import ReactDOM from 'react-dom';
import TestHook from '../TestHook';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../../../App'

afterEach(cleanup)

test('Text in state is changed when button clicked', () => {
    const { getByText } = render(<TestHook />);

    expect(getByText(/Initial/i).textContent).toBe("Initial State")

    fireEvent.click(getByText("State Change Button"))

    expect(getByText(/Initial/i).textContent).toBe("Initial State Changed")
 })


test('button click changes props', () => {
  const { getByText } = render(<App>
                                <TestHook />
                               </App>)

  expect(getByText(/Moe/i).textContent).toBe("Moe")

  fireEvent.click(getByText("Change Name"))

  expect(getByText(/Steve/i).textContent).toBe("Steve")
})