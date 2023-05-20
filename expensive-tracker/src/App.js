import React from 'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpensive from './components/IncomeExpensive';
import TransitionList from './components/TransitionList';
import AddTransition from './components/AddTransition';

function App() {
  return (
    <div>
      <Header/>
      <div className='container'>
        <Balance/>
        <IncomeExpensive/>
        <TransitionList/>
        <AddTransition/>
      </div>
    </div>
  );
}

export default App;
