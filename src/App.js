
import { useEffect, useState } from 'react';
import './App.css';
import CardList from './Components/CardList';
import ScoreBoard from './Components/ScoreBoard';



function App() {

 
  return (
    <div className="App">
        <h1>Memory Game</h1>
        <ScoreBoard/>
        <CardList/>
       
        
    </div>
  );
}

export default App;
