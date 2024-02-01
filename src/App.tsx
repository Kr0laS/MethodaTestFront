import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddStatusForm from './components/AddStatus';
import AddTransitionForm from './components/AddTransition';
import StatusList from './components/StatusList';
import TransitionList from './components/TransitionList';

function App() {
  return (
    <>
    <AddStatusForm/>
    <StatusList/>
    <AddTransitionForm/>
    <TransitionList/>
    </>
  );
}

export default App;
