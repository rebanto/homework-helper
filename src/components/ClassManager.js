import React, { useState } from 'react';

function ClassManager({ classes, addClass }) {
  const [className, setClassName] = useState('');

  const handleAddClass = () => {
    if (className.trim()) {
      addClass(className.trim());
      setClassName('');
    }
  };

  return (
    <div className="class-manager">
      <h2>Create a Class</h2>
      <input 
        type="text" 
        value={className} 
        onChange={(e) => setClassName(e.target.value)} 
        placeholder="Enter class name" 
      />
      <button onClick={handleAddClass}>Add Class</button>
      <div>
        <h3>Classes</h3>
        <ul>
          {classes.map((classItem, index) => (
            <li key={index}>{classItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ClassManager;
