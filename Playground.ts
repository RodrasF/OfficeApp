
enum WeekDaysEnum {
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat'
}

const today = new Date();
today
const dayOne = new Date(today.getFullYear(), today.getMonth(), 1);
dayOne
const dayOneWeekday = dayOne.getDay();
dayOneWeekday
const startDaysPadding = dayOneWeekday;
const week = 5;
const firstDateOfTheWeek = new Date(today.getFullYear(), today.getMonth(), ((week * 7) - startDaysPadding) + 1);
firstDateOfTheWeek


const daysPerWeek = 7;
const startOfTheMonthPadding = dayOneWeekday % daysPerWeek;
startOfTheMonthPadding

const dayOverflow = new Date(today.getFullYear(), today.getMonth(), 39);
dayOverflow

const day: number = ((week * 7) - startOfTheMonthPadding) + 1;
day
const firstDayOfTheWeek = new Date();
firstDayOfTheWeek.setHours(0, 0, 0, 0);
firstDayOfTheWeek.setDate(day);
firstDayOfTheWeek