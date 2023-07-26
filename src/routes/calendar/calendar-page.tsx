import React from 'react';
import { DateCalendar, DayCalendarSkeleton } from '@mui/x-date-pickers';
import { PickerSelectionState } from '@mui/x-date-pickers/internals';
import styles from './calendar-page.module.scss';

function CalendarPage() {
  const handleDayChanged = (value: Date | null, selectionState?: PickerSelectionState) => {
    console.log(value);
    console.log(selectionState);
  };

  return (
    <div className={styles.calendarPage}>
      <h1>Calendar</h1>
      <DateCalendar
        onChange={handleDayChanged}
        showDaysOutsideCurrentMonth
      />
      <DayCalendarSkeleton />
    </div>
  );
}

export default CalendarPage;
