import React from 'react';
import styles from './Heatmap.module.css';

const Heatmap = ({ data }) => {
  return (
    <div className={styles.heatmap}>
      {data.map((value, index) => {
        const completionLevel = value.count;
        let className;
        if (completionLevel === 0) {
          className = styles.noCompletion;
        } else if (completionLevel === 1) {
          className = styles.lowCompletion;
        } else if (completionLevel === 2) {
          className = styles.mediumCompletion;
        } else {
          className = styles.highCompletion;
        }
        return (
          <div
            key={index}
            className={`${styles.cell} ${className}`}
          ></div>
        );
      })}
    </div>
  );
};

export default Heatmap;