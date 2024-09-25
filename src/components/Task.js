import React from 'react';
import './Task.css';

function Task({ task, onDragStart }) {
  const handleResize = (e) => {
    // Logic to resize the task
    console.log(`Resizing task "${task.name}"`);
  };

  return (
    <div 
      className="task" 
      draggable 
      onDragStart={(e) => onDragStart(e, task)}
      style={{ width: `${task.duration * 15}px` }} // Duration in 15-minute increments
    >
      {task.name}
      <div className="resize-handle" onMouseDown={handleResize}>|||</div>
    </div>
  );
}

export default Task;
