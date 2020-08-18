import React from 'react';

import Header from './components/Header';

const App = () => {
  return (
    <Header title="Hello from React with props!">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </Header>
  );
};

export default App;
