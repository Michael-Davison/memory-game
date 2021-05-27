import React, {Component, useState} from "react";
import caitlyn from '../Resources/caitlyn.jpg';
import missFortune from '../Resources/missFortune.jpg';
import swain from '../Resources/swain.jpg';
import anivia from '../Resources/anivia.jpg';
import ekko from '../Resources/ekko.jpg';
import jhin from '../Resources/jhin.jpg';
import lulu from '../Resources/lulu.jpg';
import maokai from '../Resources/maokai.jpg';
import ryze from '../Resources/ryze.jpg';
import lux from '../Resources/lux.jpg';



const CardList  = (props) => {

    const cards = [
		{ image: caitlyn, name: 'Caitlyn'},
		{ image: missFortune, name: 'Miss Fortune'},
		{ image: swain, name: 'Swain'},
        { image: anivia, name: 'Anivia'},
        { image: ekko, name: 'Ekko'},
        { image: jhin, name: 'Jhin'},
        { image: lulu, name: 'Lulu'},
        { image: maokai, name: 'Maokai'},
        { image: ryze, name: 'Ryze'},
        { image: lux, name: 'Lux'},
	];

    const [cardsClicked, setCardsClicked] = useState([]);

    const [positions, setPositions] = useState(
		cards.map((value, index) => index)
	);

    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0);



const shuffleArray = (array) => {
    let shuffledArray = array.slice(0);
    for (let i = 0; i < shuffledArray.length; i++) {
        const j = Math.floor(Math.random() * shuffledArray.length);
        [shuffledArray[i], shuffledArray[j]] = [
            shuffledArray[j],
            shuffledArray[i],
        ];
    }
    return shuffledArray;
};

/*

const shuffleArray2 = (array) => {
   
    var list = array;
    list = list.sort(() => Math.random() - 0.5);
    return list;
    }
   */
    const randomizeCards = () => {

       
    setPositions(shuffleArray(positions));
    
    }

    const clickHandler = (cardName) => {
        let cardNamePassed = cardName;
        randomizeCards();
        //call gameCheck
        gameCheck(cardNamePassed);
      
    
       
        //checks if card.count is already clicked
    }

    const gameCheck = (cardName) => {
      
           if(cardsClicked.includes(cardName))
           {
              if(highScore < currentScore)
                {
                    setHighScore(currentScore);
                }
               resetGame();
           }
           else {
               
               setCardsClicked(cardsClicked => [...cardsClicked, cardName]);
               console.log("Pushed " + cardName);
               console.log(cardsClicked);
               setCurrentScore(currentScore + 1);
           }
            
    }

    const resetGame = () => {
        //reset positions to default
        setPositions(cards.map((value, index) => index));
        setCardsClicked([]);
        setCurrentScore(0);
        alert("OOPS! Game Over");
    }

    return (

      <div id = "cardListBox">
          <div id="scoreBoard" >
          <h4>Current Score: {currentScore}</h4>
          <h4>High Score: {highScore}</h4>
          </div>
          {positions.map((position) => {
				return (
					<div>
                        
                		<img key = {cards[position].name} src = {cards[position].image} onClick={e=> clickHandler(cards[position].name)}></img>
                        <h2>{cards[position].name}</h2>
					</div>
				);
			})}
  
      </div>
       
    );


 };

export default CardList;
