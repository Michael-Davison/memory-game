
import { useEffect, useState } from 'react';
import './App.css';
import CardList from './Components/CardList';
import ScoreBoard from './Components/ScoreBoard';



function App() {

  const resetGame = () => {
    
  }

  return (
    <div className="App">
        <h1>Memory Game</h1>
      
        <h4 id = "tipHeader">Goal: Click as many cards as you can without clicking the same one twice! </h4>
        <CardList/>
       
        
    </div>
  );
}

export default App;
