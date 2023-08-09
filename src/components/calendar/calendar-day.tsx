import React from 'react';
import styles from './calendar.module.scss';

interface CalendarDayProps {
  date: Date;
  isToday: boolean;
  isSelected?: boolean;
  onClick: () => void;
}

function CalendarDay({
  date, isToday, isSelected, onClick,
}: CalendarDayProps) {
  const day = date.getDate();

  return (
    <td
      className={`${isToday ? styles.today : ''} ${isSelected ? styles.selected : ''}`}
      onClick={onClick}
    >
      {day}
    </td>
  );
}

export default CalendarDay;
