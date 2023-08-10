import React from 'react';
import styles from './calendar-page.module.scss';
import Calendar from '../../components/calendar/calendar';

function CalendarPage() {
  const handleDaySelected = (date: Date) => {
    console.log(date);
  };

  return (
    <section className={styles.calendarPage}>
      <header>
        <h1>Calendar</h1>
      </header>
      <div className={styles.calendarContainer}>
        <Calendar onDaySelected={handleDaySelected} />
      </div>
    </section>
  );
}

export default CalendarPage;
