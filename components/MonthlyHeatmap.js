import React from 'react';
import Heatmap from './Heatmap';
import styles from './MonthlyHeatmap.module.css';

const MonthlyHeatmap = ({ data, monthLabel }) => {
  return (
    <div className={styles.monthlyHeatmap}>
      <div className={styles.monthLabel}>{monthLabel}</div>
      <Heatmap data={data} />
    </div>
  );
};

export default MonthlyHeatmap;
