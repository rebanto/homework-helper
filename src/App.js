import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ClassManager from './components/ClassManager';
import TaskManager from './components/TaskManager';
import SchedulePlanner from './components/SchedulePlanner';

function App() {
  const [classes, setClasses] = useState([]);

  const addClass = (className) => {
    setClasses([...classes, className]);
  };

  return (
    <div className="app">
      <Header />
      <div className="content">
        <div className="sidebar">
          <ClassManager classes={classes} addClass={addClass} />
        </div>
        <div className="main-content">
          <TaskManager classes={classes} />
          <SchedulePlanner />
        </div>
      </div>
    </div>
  );
}

export default App;
