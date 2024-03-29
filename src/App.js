import React from 'react';

import './scss/style.scss';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Main/>
    </div>
  );
}

export default App;
