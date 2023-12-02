import React, { useState } from 'react'
import ToDoLists from './ToDolists';
import './App.css'

function App(){
  const[text,setText]=useState("");
  const[items,setItems]=useState([]);

  const update=(e)=>{
    setText(e.target.value)
  }
  const listOfItems=()=>{
    setItems((oldItems)=>{
      return [...oldItems,text];
    });
    setText('');
  }
  const deleteItems=(id)=>{
        console.log("deleted");
        setItems((oldItems)=>{
          return oldItems.filter((arrElem,index)=>{
             return index !==id;
          })
        })
  }
  return(
    <>
    <div className='main-div'>
        <div className='centre-div'>
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type='text' placeholder='Add a item' onChange={update} value={text}/>
          <button onClick={listOfItems}>+</button>

          <ol>
            {items.map((itemVal,index)=>{
              return <ToDoLists key={index} id={index} onSelect={deleteItems} text={itemVal}/>
            })} 
          </ol>
        </div>
    </div>
    </>
  )
}

export default App;
