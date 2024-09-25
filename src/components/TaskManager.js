import React, { useState } from 'react';

function TaskManager({ classes }) {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [selectedClass, setSelectedClass] = useState('');

  const addTask = () => {
    if (taskName.trim() && selectedClass) {
      const newTask = { name: taskName.trim(), className: selectedClass };
      setTasks([...tasks, newTask]);
      setTaskName('');
    }
  };

  const handleDragStart = (e, task) => {
    e.dataTransfer.setData('task', JSON.stringify(task));
  };

  return (
    <div className="task-manager">
      <h2>Manage Tasks</h2>
      <select 
        value={selectedClass}
        onChange={(e) => setSelectedClass(e.target.value)}
      >
        <option value="" disabled>Select Class</option>
        {classes.map((classItem, index) => (
          <option key={index} value={classItem}>{classItem}</option>
        ))}
      </select>
      <input 
        type="text" 
        value={taskName} 
        onChange={(e) => setTaskName(e.target.value)} 
        placeholder="Enter task name" 
      />
      <button onClick={addTask}>Add Task</button>
      <div>
        <h3>Tasks</h3>
        <ul>
          {tasks.map((task, index) => (
            <li 
              key={index} 
              draggable 
              onDragStart={(e) => handleDragStart(e, task)}
            >
              {task.name} - {task.className}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskManager;
