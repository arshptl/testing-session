import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { removeCamelWithSpace } from './App';

test('button has correct initial color', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'change to Midnight Blue' });

  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });

  // on Click
  fireEvent.click(colorButton);

  // expect background to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });

  // expect button text to be change red
  expect(colorButton.textContent).toBe('change to Medium Violet Red')

});

test('initial conditions', () => {
  render(<App />)

  const colorButton = screen.getByRole('button', { name: 'change to Midnight Blue' });
  expect(colorButton).toBeEnabled();
  // check out that button starts out enabled
  const checkButton = screen.getByRole('checkbox');

  expect(checkButton).not.toBeChecked();
  // check that the checkbox has been unchecked

});

test('checkbox test state', () => {

  render(<App />);

  const colorButton = screen.getByRole('button');
  const checkButton = screen.getByRole('checkbox', { name: 'disable button' });

  
  fireEvent.click(checkButton);
  expect(colorButton).not.toBeEnabled();
  expect(checkButton).toBeChecked();
  
  
  fireEvent.click(checkButton);
  expect(colorButton).toBeEnabled();
  expect(checkButton).not.toBeChecked();

});

test('disable button turns gray backgraound and reverted red', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: 'change to Midnight Blue' });
  const checkButton = screen.getByRole('checkbox');

  fireEvent.click(checkButton);
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });

  fireEvent.click(checkButton);
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });

});

test('disable button turns gray backgraound and reverted blue', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: 'change to Midnight Blue' });
  const checkButton = screen.getByRole('checkbox');

  fireEvent.click(colorButton);

  fireEvent.click(checkButton);
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });

  fireEvent.click(checkButton);
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });
});

describe('spaces before camel-case capital letters', () => {

  test('works for no inner capital letters', () => {
    expect(removeCamelWithSpace('Red')).toBe('Red');
  });

  test('works for one innter capital letter', () => {
    expect(removeCamelWithSpace('MidnightBlue')).toBe('Midnight Blue');
  });

  test('works for multiple innter capital letters', () => {
    expect(removeCamelWithSpace('MediumVioletRed')).toBe('Medium Violet Red');
  });
  
});