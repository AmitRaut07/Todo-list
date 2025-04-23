import React, { useState } from 'react';
import './Todolist.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlus,  
  faTrashAlt, 
  faArrowUp, 
  faArrowDown,

} from '@fortawesome/free-solid-svg-icons';

const Todolist = () => {
 
        const [tasks, setTask] = useState([]);
        const [newTask, setNewTask] = useState("");
        const handleInputChange = (e)=>{
          setNewTask(e.target.value);
       
          
        }
        const addTask =()=>{
            if(newTask.trim()!== ''){
            setTask(t=>[...t, newTask]);
          
            setNewTask("");
            }
        }
        //filter removes the matching index and gives the new updated array of tasks
        const deleteTask=(index)=>{
            console.log(index);
            const updatedTask = tasks.filter((_,i)=> i !== index);
            setTask(updatedTask);
        }
        const moveTaskUp=(index)=>{
            if(index>0){
                const upadtedtasks = [...tasks];
                [upadtedtasks[index],upadtedtasks[index-1]]=[upadtedtasks[index-1],upadtedtasks[index]];
            setTask(upadtedtasks);
            }
        }
        const moveTaskDown=(index)=>{
            if(index<tasks.length-1){
                const upadtedtasks = [...tasks];
                [upadtedtasks[index],upadtedtasks[index+1]]=[upadtedtasks[index+1],upadtedtasks[index]];
            setTask(upadtedtasks);
            }
        }
    

  return (
    <div className="todo-container">
      <h1 className="todo-header">To-Do List</h1>
      
      <div className="input-group">
        <input
          type="text"
          placeholder="Enter a new task..."
          value={newTask}
          onChange={handleInputChange}
          className="task-input"
        />
        <button className="add-btn" onClick={addTask}>
          <FontAwesomeIcon icon={faPlus} /> Add
        </button>
      </div>

      <ol className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className={`task-item ${task.completed ? 'completed' : ''}`}>
            <span className="task-text">{task}</span>
            <div className="task-actions">
             
              <button 
                className="delete-btn" 
                onClick={() => deleteTask(index)}
              >
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
              <button 
                className="move-btn" 
                onClick={() => moveTaskUp(index)}
              >
                <FontAwesomeIcon icon={faArrowUp} />
              </button>
              <button 
                className="move-btn" 
                onClick={() => moveTaskDown(index)}
              >
                <FontAwesomeIcon icon={faArrowDown} />
              </button>
            
               
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Todolist;