import React from 'react';

const Todo = ({ todoList: {todo,id, isComplete}, removeTodo, completeTodo}) =>{

    // function  deleteByID() {
    //     removeTodo(id)
    // }
    return( 
        <div style ={{textDecoration: isComplete ? "line-through" : ""}}>
{/* destructured */}
            {todo}  
            {/* if the todo was completed, line through it, otherwise return an empty string*/}
            <div>
                <button onClick ={()=>completeTodo(id)}>Done</button>
                <button onClick={()=> removeTodo(id)}>Delete</button>
                </div>
                <hr />

        </div>
    )
}

export default Todo;