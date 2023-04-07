import React, { useState } from 'react';
import { Russo_One } from 'next/font/google';
import MonthlyHeatmap from '../components/MonthlyHeatmap';
import YearlyHeatmap from '../components/YearlyHeatmap';
import HabitsList from '../components/HabitsList';
import { mockDataMonth1, mockDataMonth2, mockDataMonth3 } from '../data/mockData';

const russo = Russo_One({ subsets: ['latin'], weight: ['400'] })
const IndexPage = () => {
  const [habitsData, setHabitsData] = useState([
    { name: 'Exercise' },
    { name: 'Read' },
    { name: 'Code' },
  ]);

  const removeHabit = (index) => {
    setHabitsData((prevHabits) => prevHabits.filter((_, i) => i !== index));
  };

  const addHabit = (habit) => {
    setHabitsData((prevHabits) => [...prevHabits, habit]);
  };

  // Get the month labels in English using 'en-US' locale
  const currentMonth = new Date().toLocaleString('en-US', { month: 'long' });
  const previousMonth = new Date(new Date().setMonth(new Date().getMonth() - 1)).toLocaleString('en-US', { month: 'long' });
  const twoMonthsAgo = new Date(new Date().setMonth(new Date().getMonth() - 2)).toLocaleString('en-US', { month: 'long' });

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div className={russo.className}>
        <h1 style={{ textAlign: 'center', marginBottom: '16px' }}>Habit Tracker</h1>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', flex: 1 }}>
        <div style={{ flex: '1', marginLeft: '1rem', maxWidth: '60%', height: '97.5%'}}>
          <HabitsList habits={habitsData} removeHabit={removeHabit} addHabit={addHabit} />
          <div style={{ flex: '1', marginTop: '10%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div>
              <YearlyHeatmap year={2022} />
            </div>
          </div>
        </div>
        <div style={{ flex: '1', maxWidth: '30%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <MonthlyHeatmap data={mockDataMonth3} monthLabel={currentMonth} />
          <MonthlyHeatmap data={mockDataMonth2} monthLabel={previousMonth} />
          <MonthlyHeatmap data={mockDataMonth1} monthLabel={twoMonthsAgo} />
        </div>
      </div>
    </div>
  );
  };
  

export default IndexPage;
