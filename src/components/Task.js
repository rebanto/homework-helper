import React from 'react';
import './Task.css';

function Task({ task, onDragStart }) {
  return (
    <div
      className="task"
      draggable
      onDragStart={(e) => onDragStart(e, task)}
      style={{ width: `${task.duration * 15}px` }}
    >
      {task.name}
    </div>
  );
}

export default Task;
