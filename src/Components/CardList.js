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

//import AnneBoonchuy from '../images/anne.jpg';







const CardList  = (props) => {

    const cards = [
		{ image: caitlyn, name: 'Caitlyn' },
		{ image: missFortune, name: 'Miss Fortune' },
		{ image: swain, name: 'Swain' },
        { image: anivia, name: 'Anivia'},
        { image: ekko, name: 'Ekko'},
        { image: jhin, name: 'Jhin'},
        { image: lulu, name: 'Lulu'},
        { image: maokai, name: 'Maokai'},
        { image: ryze, name: 'Ryze'},
        { image: lux, name: 'Lux'}
	];

    const [positions, setPositions] = useState(
		cards.map((value, index) => index)
	);



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

       console.log("test");
    setPositions(shuffleArray(positions));
    
    }
  

   




    return (

      <div id = "cardListBox">
          
          {positions.map((position) => {
				return (
					<div>
                        
                		<img key = {cards[position].name} src = {cards[position].image} onClick={randomizeCards}></img>
                        <h2>{cards[position].name}</h2>
					</div>
				);
			})}
            
            
      </div>
       
    );


 };

 /*

 */

 
export default CardList;
