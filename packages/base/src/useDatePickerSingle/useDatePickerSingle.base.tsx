import { useState } from "react";
import { IUseDatePickerSingleProps, IUseDatePickerSingleReturn } from "./types";

const currentDateObject = new Date();

/**
 * A present from jupri's lab hook for creating a single date picker with support for
 * selectable dates, minimum and maximum date range, and disabled dates.
 * It provides state and functions to manage the active date and handle date selection.
 * @param props The hook configuration options.
 * @remarks
 * Example:
 * ```
 * const {
 *   currentDate,
 *   currentMonth,
 *   currentYear,
 *   activeDate,
 *   activeMonth,
 *   activeYear,
 *   activeMonthIndex,
 *   activeDateObject,
 *   currentDateObject,
 *   firstDayInMonth,
 *   daysInMonth,
 *   startDate,
 *   endDate,
 *   selectedDate,
 *   isDateSelectable,
 *   handleDateSelect,
 *   handleChangePerMonth,
 *   handleChangePerYear,
 * } = useDatePickerSingle({
 *   minDate: new Date(),
 *   maxDate: new Date('2025-12-31'),
 *   disabledDates: [new Date('2024-03-08')],
 *   onDateSelected: (date) => console.log('Selected date:', date),
 * });
 * ```
 */
const useDatePickerSingle = (
  props: IUseDatePickerSingleProps = {}
): IUseDatePickerSingleReturn => {
  const [activeMonthIndex, setActiveMonthIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const activeDateObject = new Date(currentDateObject);
  activeDateObject.setMonth(activeDateObject.getMonth() + activeMonthIndex);
  activeDateObject.setDate(1);
  const activeYear = activeDateObject.getFullYear();
  const activeMonth = activeDateObject.getMonth();
  const activeDate = activeDateObject.getDate();

  const firstDayInMonth = activeDateObject.getDay();
  const daysInMonth = new Date(activeYear, activeMonth + 1, 0).getDate();
  const startDate = new Date(activeYear, activeMonth, 1);
  const endDate = new Date(activeYear, activeMonth, daysInMonth);

  /**
   * Checks if a date is selectable based on the minDate, maxDate, and disabledDates.
   * @param date The date to check.
   * @returns True if the date is selectable, false otherwise.
   */
  const isDateSelectable = (date: Date) =>
    (!props?.minDate || date >= props?.minDate) &&
    (!props?.maxDate || date <= props?.maxDate) &&
    (!props?.disabledDates ||
      !props?.disabledDates.some(
        (disabledDate) =>
          disabledDate.getFullYear() === date.getFullYear() &&
          disabledDate.getMonth() === date.getMonth() &&
          disabledDate.getDate() === date.getDate()
      ));

  /**
   * Handles the event on a date.
   * @param date The date that was clicked.
   */
  const handleDateSelect = (date: Date) => {
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
    firstDayInMonth,
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
