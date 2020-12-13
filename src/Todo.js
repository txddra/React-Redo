import React from 'react';

const Todo = ({ todoList: {todo,id }, removeTodo}) =>{
    return(
        <div>
{/* destructured */}
            {todo}
            <div>
                <button>Done</button>
                <button onClick={()=> removeTodo(id)}>Delete</button>
                </div>
                <hr />

        </div>
    )
}

export default Todo;