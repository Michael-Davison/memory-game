import React, {Component} from "react";




const CardList  = (props) => {

    const { tasks } = props;

   
    return (

        <h1></h1>
        /*
        <ul>
            {tasks.map((task) => {
                //onClick call deleteTask(this.task.index)
                return <li key={task.id}>{task.index} {task.text} <button onClick={() => props.handle(task.id)}>Delete</button><button>Edit</button></li>
            })}
        
        </ul>
        */
    );
 

 };

 
export default CardList;
