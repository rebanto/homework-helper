import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ClassManager from './components/ClassManager';
import TaskManager from './components/TaskManager';
import SchedulePlanner from './components/SchedulePlanner';

function App() {
  const [classes, setClasses] = useState([]);
  const [currentPage, setCurrentPage] = useState('tasks'); // Default to TaskManager
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar state
  const [tasks, setTasks] = useState([]); // Add tasks state

  const addClass = (className) => {
    if (className.trim() && !classes.includes(className.trim())) {
      setClasses([...classes, className.trim()]);
    }
  };

  const removeClass = (className) => {
    setClasses(classes.filter((cls) => cls !== className));
    setTasks(tasks.filter(task => task.className !== className)); // Remove associated tasks
  };

  return (
    <div className="app">
      <Header />

      {/* Navigation buttons */}
      <div className="nav-buttons">
        <button onClick={() => setCurrentPage('tasks')} className={currentPage === 'tasks' ? 'active' : ''}>Manage Tasks</button>
        <button onClick={() => setCurrentPage('schedule')} className={currentPage === 'schedule' ? 'active' : ''}>Schedule Planner</button>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h3>Classes</h3>
          <span className="close-btn" onClick={() => setIsSidebarOpen(false)}>X</span>
        </div>
        <ClassManager classes={classes} addClass={addClass} removeClass={removeClass} tasks={tasks} setTasks={setTasks} />
      </div>

      {/* Sidebar open button */}
      {!isSidebarOpen && (
        <span className="open-btn" onClick={() => setIsSidebarOpen(true)}>&#9776;</span>
      )}

      {/* Main content */}
      <div className="main-content">
        {currentPage === 'tasks' && <TaskManager classes={classes} setTasks={setTasks} />}
        {currentPage === 'schedule' && <SchedulePlanner />}
      </div>
    </div>
  );
}

export default App;
