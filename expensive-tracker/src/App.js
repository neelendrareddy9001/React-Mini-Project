import React from 'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpensive from './components/IncomeExpensive';

function App() {
  return (
    <div>
      <Header/>
      <div className='container'>
        <Balance/>
        <IncomeExpensive/>
      </div>
    </div>
  );
}

export default App;
