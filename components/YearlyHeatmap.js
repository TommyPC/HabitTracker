import React from 'react';
import moment from 'moment';
import styles from './YearlyHeatmap.module.css';

const YearlyHeatmap = () => {
  // Generate data for the entire year
  const endDate = moment(); // Today's date
  const startDate = moment().subtract(1, 'year'); // A year from now (in the past)
  const yearData = [];

  while (startDate.isSameOrBefore(endDate)) {
    const count = Math.floor(Math.random() * 5); // Random count for demo purposes
    yearData.push({
      date: startDate.toDate(),
      count,
    });
    startDate.add(1, 'day');
  }

  return (
    <div className={styles.yearlyHeatmap}>
      {yearData.map((data, index) => (
        <div
          key={index}
          className={styles.cell}
          style={{ backgroundColor: getCellColor(data.count) }}
          title={data.date.toLocaleDateString()}
        ></div>
      ))}
    </div>
  );
};

// Function to determine cell color based on count
const getCellColor = (count) => {
  if (count === 0) return '#D3D3D3'; // No activity color
  if (count <= 1) return '#c6e48b'; // Low activity color
  if (count <= 2) return '#7bc96f'; // Medium activity color
  return '#239a3b'; // High activity color
};

export default YearlyHeatmap;


