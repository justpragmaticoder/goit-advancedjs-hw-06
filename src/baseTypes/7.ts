enum WeekDays {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}

function isWeekend(day: WeekDays): boolean {
  return day === WeekDays.Sunday || day === WeekDays.Saturday;
}

console.log(isWeekend(WeekDays.Sunday));  // true
console.log(isWeekend(WeekDays.Wednesday));  // false
console.log(isWeekend(WeekDays.Saturday));  // true

export {};