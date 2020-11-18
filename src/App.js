import React from 'react';
import './App.css';

function App() {
  return (<div className = 'app-wrapper'>
    <header className='header'>
      <img src='https://toplogos.ru/images/logo-half-life.jpg' alt='HL'/>
    </header>
    <nav className='nav'>
      <div>Profile</div>
      <div>Messages</div>
    </nav>
    <div className='content'>Main content</div>
  </div>
  );
}

export default App;
