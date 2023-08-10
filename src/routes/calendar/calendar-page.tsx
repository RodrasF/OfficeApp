import React from 'react';
import styles from './calendar-page.module.scss';
import Calendar from '../../components/calendar/calendar';

function CalendarPage() {
  const handleDaySelected = (date: Date) => {
    console.log(date);
  };

  return (
    <div className={styles.calendarPage}>
      <h1>Calendar</h1>
      <Calendar onDaySelected={handleDaySelected} />
    </div>
  );
}

export default CalendarPage;
