import moment from 'moment';

// Set the locale to English
moment.locale('en');

function generateDataForMonth(startDate, daysInMonth) {
  const data = [];
  const currentDate = startDate.clone();
  for (let i = 0; i < daysInMonth; i++) {
    const count = Math.floor(Math.random() * 5);
    data.push({
      date: currentDate.toDate(),
      count,
    });
    currentDate.add(1, 'day');
  }
  return data;
}

export const mockDataMonth1 = generateDataForMonth(moment().subtract(2, 'months').startOf('month'), moment().subtract(2, 'months').daysInMonth());
export const mockDataMonth2 = generateDataForMonth(moment().subtract(1, 'months').startOf('month'), moment().subtract(1, 'months').daysInMonth());
export const mockDataMonth3 = generateDataForMonth(moment().startOf('month'), moment().daysInMonth());
