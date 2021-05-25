//render tasks
import React, {Component, useState} from "react";




const ScoreBoard  = (props) => {

    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

   
    return (
        <div id ="Scoreboard">
     <h2>Current Score: {currentScore}</h2>
     <h2>Best Score: {bestScore}</h2>
     <h3>Goal: Click as many cards as </h3>
     <h3>you can without clicking the same one twice!</h3>
     </div>
    );
 

 };

 
export default ScoreBoard;
