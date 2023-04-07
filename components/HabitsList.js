import React, { useState } from 'react';
import styles from './HabitsList.module.css';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const HabitsList = ({ habits, removeHabit, addHabit }) => {
  const [completionStatus, setCompletionStatus] = useState(habits.map(() => Array(7).fill(false)));
  const [newHabit, setNewHabit] = useState('');

  const handleCheckboxChange = (habitIndex, dayIndex) => {
    setCompletionStatus((prevStatus) => {
      // Create a deep copy of the prevStatus array
      const updatedStatus = prevStatus.map((habitCompletion) => [...habitCompletion]);
      // Update the corresponding value based on habit index and day index
      updatedStatus[habitIndex][dayIndex] = !updatedStatus[habitIndex][dayIndex];
      console.log('Updated completionStatus:', updatedStatus);
      return updatedStatus;
    });
  };
  

  const handleAddHabit = () => {
    if (newHabit.trim()) {
      addHabit({ name: newHabit.trim() });
      setCompletionStatus((prevStatus) => [...prevStatus, Array(7).fill(false)]);
      setNewHabit('');
    }
  };

  return (
    <div className={styles.habitsList}>
      <div className={styles.header}>
        <div className={styles.habitName}></div>
        <div className={styles.daysContainer}>
          {daysOfWeek.map((day, index) => (
            <div key={index} className={styles.day}>{day}</div>
          ))}
        </div>
        <div></div>
      </div>
      {habits.map((habit, habitIndex) => (
        <div key={habitIndex} className={styles.habitRow}>
          <div className={styles.habitName}>{habit.name}</div>
          <div className={styles.checkboxesContainer}>
            {daysOfWeek.map((_, dayIndex) => (
              <div key={dayIndex} className={styles.checkboxWrapper}>
                <input
                  type="checkbox"
                  checked={completionStatus[habitIndex]?.[dayIndex] || false}
                  onChange={() => handleCheckboxChange(habitIndex, dayIndex)}
                />
              </div>
            ))}
          </div>
          <button className={styles.removeButton} onClick={() => removeHabit(habitIndex)}>Remove</button>
        </div>
      ))}
      <div className={styles.habitRow}>
        <input
          className={`${styles.habitName} ${styles.newHabitInput}`}
          type="text"
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
          placeholder="New habit"
        />
        <div className={styles.checkboxesContainer}>
          {Array.from({ length: 7 }).map((_, dayIndex) => (
            <div key={dayIndex} className={styles.checkboxWrapper}></div>
          ))}
        </div>
        <button className={styles.addButton} onClick={handleAddHabit}>Add Habit</button>
      </div>
    </div>
  );
};

export default HabitsList;
