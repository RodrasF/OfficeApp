import React from 'react';
import styles from './calendar.module.scss';
import CalendarDay from './calendar-day';

interface CalendarProps {
  onDateSelected: (date: Date) => void;
}

enum WeekDaysEnum {
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat'
}

function Calendar({ onDateSelected }: CalendarProps) {
  const today = React.useMemo(() => new Date(), []);

  const [selectedDay, setSelectedDay] = React.useState<number>(today.getDate());
  const [selectedMonth, setSelectedMonth] = React.useState<number>(today.getMonth());
  const [selectedYear, setSelectedYear] = React.useState<number>(today.getFullYear());

  const selectedDate = React.useMemo(
    () => new Date(selectedYear, selectedMonth, selectedDay),
    [selectedDay, selectedMonth, selectedYear],
  );

  React.useEffect(() => {
    onDateSelected(selectedDate);
  }, [onDateSelected, selectedDate]);

  const handleDaySelection = (day: number) => {
    setSelectedDay(day);
  };

  const handleMonthSelection = (month: number) => {
    setSelectedMonth(month);
  };

  const handleYearSelection = (year: number) => {
    setSelectedYear(year);
  };

  const getRenderedWeek = (week: number) => {
    <tr key={`week-${week}`}>
      <td key={`week-${week}`} />
      <CalendarDay
        key={date.toDateString()}
        date={date}
        isToday={isToday}
        isSelected={isSelected}
        onClick={() => handleDaySelection(date)}
      />
    </tr>;
    const days = [];
    for (let day = 0; day < 7; day++) {
      const date = new Date(selectedYear, selectedMonth, startDaysPadding + (week * 7) + day);
      days.push(<CalendarDay key={date.toString()} date={date} onDaySelected={handleDaySelection} />);
    }
    return <tr key={week}>{days}</tr>;
  };

  const renderMonth = () => {
    const fixedNumberOfWeeksToDisplay = 6;

    const firstDayOfMonth = new Date(selectedYear, selectedMonth, 1);
    const weekDay = firstDayOfMonth.getDay();
    const numberOfDaysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
    const startDaysPadding = firstDayOfMonth.getDate() - (weekDay - 1);
    const startDaysPadding = firstDayOfMonth.getDate() - (weekDay - 1);

    const weeks = [];
    for (let week = 0; week <= fixedNumberOfWeeksToDisplay; week++) {
      weeks.push(getRenderedWeek(week));
    }
  };

  return (
    <div className={styles.calendar}>
      <h2>Calendar</h2>
      <table>
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>{renderMonth()}</tbody>
      </table>
    </div>
  );
}

export default Calendar;
