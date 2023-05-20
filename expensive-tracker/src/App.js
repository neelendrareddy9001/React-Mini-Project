import React from 'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpensive from './components/IncomeExpensive';
import TransitionList from './components/TransitionList';
import AddTransition from './components/AddTransition';

import { GlobalProvider } from './context/GlobalState';

function App()  {
  return (
    <GlobalProvider>
      <Header/>
      <div className='container'>
        <Balance/>
        <IncomeExpensive/>
        <TransitionList/>
        <AddTransition/>
      </div>
    </GlobalProvider>
  )
  };
export default App;
