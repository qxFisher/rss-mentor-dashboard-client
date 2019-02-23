import React from 'react';
import App from './App';
import {render, cleanup} from 'react-testing-library';

afterEach(cleanup);

it('Main div renders without crashing', () => {
  render(<App />);

  const div = document.querySelector('div');
  expect(div).toBeTruthy();
});

it('Login wrapper renders without crashing', () => {
  render(<App />);

  const loginSection = document.querySelector('.login__wrapper');
  expect(loginSection).toBeTruthy();
});
