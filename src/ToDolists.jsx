import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import './App.css'

const ToDoLists =(props)=>{
    
    return (
        <>
          <div className='todo'>
           <FontAwesomeIcon icon={faXmark} className='fa fa-times' onClick={()=>{
             props.onSelect(props.id);
           }}/>
           <li>{props.text}</li>
          </div>
        </>
      
    )
}

export default ToDoLists;