
enum WeekDaysEnum {
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat'
}

const firstDay = new Date(2023, 7, 1);
const firstDayWeekDay = firstDay.getDay();
firstDay
firstDayWeekDay

const weekDayName = WeekDaysEnum[firstDayWeekDay];
weekDayName

const firstMondayDay = new Date()
const diff = firstDay.getDate() - (firstDayWeekDay - 1);
diff
firstMondayDay.setDate(diff);
firstMondayDay

const weekdays: string[] = [];
for (const weekDay in WeekDaysEnum) {
  weekdays.push(weekDay);
}
console.log(weekdays);//^? 


/* Week:
      <tr key={i}>
        <td key={`${week}-${i}}/>
        {weekDays}
      </tr>
    */

    /* Day:
      const isToday = date.toDateString() === today.toDateString();
      const isSelected = selectedDate?.toDateString() === date.toDateString() || false;

      <CalendarDay
        key={date.toDateString()}
        date={date}
        isToday={isToday}
        isSelected={isSelected}
        onClick={() => handleDayClick(date)}
      />;
    */
      return (
        <tr key="week1">
          <td key="week1d" />
          <CalendarDay
            key={date.toDateString()}
            date={date}
            isToday={isToday}
            isSelected={isSelected}
            onClick={() => handleDaySelection(date)}
          />
          <CalendarDay
            key={date.toDateString()}
            date={date}
            isToday={isToday}
            isSelected={isSelected}
            onClick={() => handleDaySelection(date)}
          />
          <CalendarDay
            key={date.toDateString()}
            date={date}
            isToday={isToday}
            isSelected={isSelected}
            onClick={() => handleDaySelection(date)}
          />
          <CalendarDay
            key={date.toDateString()}
            date={date}
            isToday={isToday}
            isSelected={isSelected}
            onClick={() => handleDaySelection(date)}
          />
          <CalendarDay
            key={date.toDateString()}
            date={date}
            isToday={isToday}
            isSelected={isSelected}
            onClick={() => handleDaySelection(date)}
          />
          <CalendarDay
            key={date.toDateString()}
            date={date}
            isToday={isToday}
            isSelected={isSelected}
            onClick={() => handleDaySelection(date)}
          />
          <CalendarDay
            key={date.toDateString()}
            date={date}
            isToday={isToday}
            isSelected={isSelected}
            onClick={() => handleDaySelection(date)}
          />
        </tr>
      );