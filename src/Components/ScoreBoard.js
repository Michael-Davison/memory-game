//render tasks
import React, {Component, useState} from "react";




const ScoreBoard  = (props) => {

    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

   
    return (
        <div id ="Scoreboard">
     <h4>Current Score: {currentScore}</h4>
     <h4>Best Score: {bestScore}</h4>
     
     
     </div>
    );
 

 };

 
export default ScoreBoard;
