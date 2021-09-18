import React from 'react'

const ToDoList = ( props ) =>{
    return (
        <div>
            <li className = "todoitem" key={props.keytab} id={props.id}>
            <input type="checkbox" onClick={ () => {
                props.onDelete(props.id);
            }}/>  
            {props.itemname}
            </li>
        </div>
    )
}

export default ToDoList
