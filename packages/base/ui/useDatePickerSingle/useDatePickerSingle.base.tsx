import { useState } from "react";
import { IDateObjectProps, IUseDatePickerSingleProps } from "./types";

const currentDateObject = new Date();

/**
 * A present from jupri's lab hook for creating a single date picker with support for
 * selectable dates, minimum and maximum date range, and disabled dates.
 * It provides state and functions to manage the active date and handle date selection.
 * @param props The hook configuration options.
 * @returns An object containing state and functions for the date picker.
 */
const useDatePickerSingle = (props: IUseDatePickerSingleProps = {}) => {
  const [activeMonthIndex, setActiveMonthIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState<IDateObjectProps | null>(
    null
  );

  const activeDateObject = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + activeMonthIndex,
    day: 1,
  };
  const activeYear = activeDateObject.year;
  const activeMonth = activeDateObject.month;
  const activeDate = activeDateObject.day;

  const daysInMonth = new Date(activeYear, activeMonth + 1, 0).getDate();
  const startDate = {
    year: activeYear,
    month: activeMonth,
    day: 1,
  };
  const endDate = {
    year: activeYear,
    month: activeMonth,
    day: daysInMonth,
  };

  /**
   * Checks if a date is selectable based on the minDate, maxDate, and disabledDates.
   * @param date The date to check.
   * @returns True if the date is selectable, false otherwise.
   */
  const isDateSelectable = (date: IDateObjectProps) =>
    (!props?.minDate ||
      new Date(date.year, date.month, date.day) >= props?.minDate) &&
    (!props?.maxDate ||
      new Date(date.year, date.month, date.day) <= props?.maxDate) &&
    (!props?.disabledDates ||
      !props?.disabledDates.some(
        (disabledDate) =>
          disabledDate.getFullYear() === date.year &&
          disabledDate.getMonth() === date.month &&
          disabledDate.getDate() === date.day
      ));

  /**
   * Handles the click event on a date.
   * @param date The date that was clicked.
   */
  const handleDateSelect = (date: IDateObjectProps) => {
    if (isDateSelectable(date)) {
      setSelectedDate(date);
      if (props?.onDateSelected) {
        props.onDateSelected(date);
      }
    }
  };

  /**
   * Changes the active month index.
   * @param newActiveMonthIndex The new active month index.
   */
  const handleChangePerMonth = (newActiveMonthIndex: number) => {
    setActiveMonthIndex(newActiveMonthIndex);
  };

  /**
   * Changes the active month index based on the selected year.
   * @param newActiveYear The new active year.
   */
  const handleChangePerYear = (newActiveYear: number) => {
    setActiveMonthIndex((newActiveYear - activeYear) * 12);
  };

  return {
    currentDate: currentDateObject.getDate(),
    currentMonth: currentDateObject.getMonth(),
    currentYear: currentDateObject.getFullYear(),
    activeDate,
    activeMonth,
    activeYear,
    activeMonthIndex,
    activeDateObject,
    currentDateObject,
    daysInMonth,
    startDate,
    endDate,
    selectedDate,
    isDateSelectable,
    handleDateSelect,
    handleChangePerMonth,
    handleChangePerYear,
  };
};

export default useDatePickerSingle;
