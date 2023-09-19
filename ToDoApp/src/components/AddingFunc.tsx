import React, { useState } from 'react';
import './AddingFunc.css'

function TodoApp() {

  type TaskList = string[];


  const [tasks, setTasks] = useState<TaskList>([]);
  const [taskText, setTaskText] = useState<string>('');


  const handleTaskTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskText(event.target.value);
  };


  const handleAddTask = () => {
    if (taskText.trim() === '') {
      return; 
    }

    setTasks([...tasks, taskText]); 
    setTaskText(''); 
  };

  const deleteTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1)
    setTasks(newTasks)
  }

  return (
    <div className='to-do'>
      <div>
        <input
          type="text"
          value={taskText}
          onChange={handleTaskTextChange}
          placeholder="Add task"
          className='add-to-do'
        />
        <button onClick={handleAddTask} className='button-to-do'>Add</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
          <button type="button" onClick={() => deleteTask(index)} className='button-to-do'>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
