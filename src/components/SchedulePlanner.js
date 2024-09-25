import React, { useEffect, useState } from 'react';
import './SchedulePlanner.css';

function SchedulePlanner() {
  const [timeSlots, setTimeSlots] = useState([]);

  useEffect(() => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = Math.floor(now.getMinutes() / 15) * 15; // Round down to nearest 15 minutes
    const startTime = new Date(now.setHours(currentHour, currentMinute, 0, 0));

    const slots = [];
    for (let i = 0; i < 96; i++) { // 96 slots for 24 hours (15 min intervals)
      const timeSlot = new Date(startTime);
      timeSlot.setMinutes(startTime.getMinutes() + i * 15);
      if (timeSlot.getHours() >= 24) break; // Stop at midnight
      slots.push(timeSlot);
    }
    setTimeSlots(slots);
  }, []);

  const handleDrop = (e, slot) => {
    e.preventDefault();
    const task = JSON.parse(e.dataTransfer.getData('task'));
    console.log(`Dropped task "${task.name}" into ${slot.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="schedule-planner">
      <h2>Schedule Planner</h2>
      <div className="timeline">
        {timeSlots.map((slot, index) => (
          <div
            key={index}
            className="time-slot"
            onDrop={(e) => handleDrop(e, slot)}
            onDragOver={handleDragOver}
          >
            {slot.getMinutes() === 0 && (
              <span className="time-label">
                {slot.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            )}
            <div className={`ruler-line ${slot.getMinutes() === 0 ? 'hour-marker' : 'quarter-marker'}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SchedulePlanner;
