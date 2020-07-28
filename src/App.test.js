import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

describe('<App renders />', () => {
  // Just to test if app is rendering at all
  it('Renders at all without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  })
})