import React from 'react';
import styles from './calendar.module.scss';
import CalendarDay from './calendar-day';

interface CalendarProps {
  onDaySelected: (date: Date) => void;
}

const NUMBER_OF_WEEKS_TO_DISPLAY = 6;
const DAYS_PER_WEEK = 7;

function Calendar({ onDaySelected }: CalendarProps) {
  const today = React.useMemo(() => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    return now;
  }, []);

  const [selectedDay, setSelectedDay] = React.useState<Date>(today);
  const [selectedMonth, setSelectedMonth] = React.useState<number>(today.getMonth());
  const [selectedYear, setSelectedYear] = React.useState<number>(today.getFullYear());

  const handleDaySelection = (date: Date) => {
    setSelectedDay(date);
    onDaySelected(date);
  };

  const handleMonthSelection = (month: number) => {
    setSelectedMonth(month);
  };

  const handleYearSelection = (year: number) => {
    setSelectedYear(year);
  };

  const renderWeek = (week: number, startDate: Date) => {
    const days: JSX.Element[] = [];
    for (let day = 0; day < DAYS_PER_WEEK; day++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + day);

      const isToday = currentDate.getTime() === today.getTime();
      const isSelected = currentDate.getTime() === selectedDay.getTime();
      const isPadding = currentDate.getMonth() !== selectedMonth;

      days.push(
        <CalendarDay
          key={currentDate.toString()}
          date={currentDate}
          isToday={isToday}
          isSelected={isSelected}
          isPadding={isPadding}
          onClick={handleDaySelection}
        />,
      );
    }

    return (
      <tr key={`week-${week}`}>
        {days.map((day) => day)}
      </tr>
    );
  };

  const renderMonth = () => {
    const dayOne = new Date(selectedYear, selectedMonth, 1, 0, 0, 0, 0);
    const dayOneWeekday = dayOne.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const startOfTheMonthPadding = dayOneWeekday % DAYS_PER_WEEK;

    const weeks: JSX.Element[] = [];
    for (let week = 0; week < NUMBER_OF_WEEKS_TO_DISPLAY; week++) {
      const day: number = ((week * DAYS_PER_WEEK) - startOfTheMonthPadding) + 1;
      const firstDayOfTheWeek = new Date(dayOne);
      firstDayOfTheWeek.setDate(day);

      weeks.push(renderWeek(week, firstDayOfTheWeek));
    }

    return weeks.map((week) => week);
  };

  return (
    <div className={styles.calendar}>
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
