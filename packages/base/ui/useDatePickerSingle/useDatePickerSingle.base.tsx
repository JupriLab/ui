import React, { useState } from "react";

const instanceOfCurrentDate = new Date();
const currentYear = instanceOfCurrentDate.getFullYear();
const currentMonth = instanceOfCurrentDate.getMonth();
const currentDate = instanceOfCurrentDate.getDate();

const useDatePickerSingle = () => {
  const [activeMonthCounter, setActiveMonthCounter] = useState(0);

  const instanceOfActiveDate = new Date(
    currentYear,
    currentMonth + activeMonthCounter,
    1,
    0
  );
  const activeYear = instanceOfActiveDate.getFullYear();
  const activeMonth = instanceOfActiveDate.getMonth();
  const activeDate = instanceOfActiveDate.getDate();

  console.log(instanceOfActiveDate);

  return {
    currentDate,
    currentMonth,
    currentYear,
    activeDate,
    activeMonth,
    activeYear,
    activeMonthCounter,
    setActiveMonthCounter,
  };
};

export default useDatePickerSingle;
