import React from 'react';
import classNames from 'classnames/bind';
import styles from './calendar-day.module.scss';

const cx = classNames.bind(styles);
interface CalendarDayProps {
  date: Date;
  isToday?: boolean;
  isSelected?: boolean;
  isPadding?: boolean;
  onClick: (date: Date) => void;
}

function CalendarDay({
  date, isToday, isSelected, isPadding, onClick,
}: CalendarDayProps) {
  const day = date.getDate();

  const dayStyles = cx(styles.day, {
    today: isToday,
    selected: isSelected,
    paddingDay: isPadding,
  });

  return (
    <td
      className={styles.calendarDay}
      onClick={() => onClick(date)}
    >
      <div className={dayStyles}>
        {day}
      </div>
    </td>
  );
}

export default CalendarDay;
