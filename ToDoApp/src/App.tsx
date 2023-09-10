import './App.css'
import { useState } from 'react'

function App() {

  return (
    <>
        <div className="main">
          <div className="header">
            Basic To Do App
          </div>

          <div className='container'>
            <input type="text" className='addToDo' value="Type your To-Do here"/> 
          </div>
        </div>
    </>
  )
}

export default App
