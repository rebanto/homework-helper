import React, { useState } from 'react';
import './ClassManager.css';

function ClassManager({ classes, addClass, removeClass, tasks, setTasks }) {
  const [newClassName, setNewClassName] = useState('');
  const [isRemovingClass, setIsRemovingClass] = useState({ isOpen: false, className: '' });

  const handleAddClass = () => {
    if (newClassName.trim()) {
      addClass(newClassName.trim());
      setNewClassName('');  // Clear the input field after adding
    }
  };

  const confirmRemoveClass = (className) => {
    setIsRemovingClass({ isOpen: true, className });
  };

  const handleRemoveClass = () => {
    if (isRemovingClass.className) {
      removeClass(isRemovingClass.className);
      setIsRemovingClass({ isOpen: false, className: '' }); // Close confirmation
    }
  };

  const cancelRemoveClass = () => {
    setIsRemovingClass({ isOpen: false, className: '' });
  };

  return (
    <div className="class-manager">
      <h3>Manage Classes</h3>
      <div className="add-class-section">
        <input
          type="text"
          value={newClassName}
          onChange={(e) => setNewClassName(e.target.value)}
          placeholder="Enter new class name"
        />
        <button onClick={handleAddClass}>Add Class</button>
      </div>
      <ul>
        {classes.map((classItem, index) => (
          <li key={index} className="class-item">
            <div className='cls-itm'>
              {classItem}
            </div>
            <button 
              className="remove-btn" 
              onClick={() => confirmRemoveClass(classItem)}>
              &times;  {/* X symbol for remove */}
            </button>
          </li>
        ))}
      </ul>

      {isRemovingClass.isOpen && (
        <div className="confirmation-popup">
          <p>Are you sure you want to remove the class "{isRemovingClass.className}"?</p>
          <div className='confirm'>
            <button onClick={handleRemoveClass}>Yes</button>
            <button onClick={cancelRemoveClass}>No</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ClassManager;
