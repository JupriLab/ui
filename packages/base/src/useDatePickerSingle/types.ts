/**
 * Props for the useDatePickerSingle hook.
 */
export interface IUseDatePickerSingleProps {
  /**
   * The minimum selectable date.
   */
  minDate?: Date;
  /**
   * The maximum selectable date.
   */
  maxDate?: Date;
  /**
   * An array of dates that should be disabled.
   */
  disabledDates?: Date[];
  /**
   * A callback function called when a date is selected.
   */
  onDateSelected?: (date: Date) => void;
}

/**
 * Represents the return value of the useDatePickerSingle hook.
 */
export interface IUseDatePickerSingleReturn {
  /**
   * The current date (day of the month).
   */
  currentDate: number;
  /**
   * The current month (0-indexed).
   */
  currentMonth: number;
  /**
   * The current year.
   */
  currentYear: number;
  /**
   * The active date (day of the month).
   */
  activeDate: number;
  /**
   * The active month (0-indexed).
   */
  activeMonth: number;
  /**
   * The active year.
   */
  activeYear: number;
  /**
   * The active month index (0-indexed).
   */
  activeMonthIndex: number;
  /**
   * The active date object.
   */
  activeDateObject: Date;
  /**
   * The current date object.
   */
  currentDateObject: Date;
  /**
   * Gets the index of the first day of the week in the active month.
   * (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
   */
  firstDayInMonth: number;
  /**
   * The number of days in the active month.
   */
  daysInMonth: number;
  /**
   * The start date of the active month.
   */
  startDate: Date;
  /**
   * The end date of the active month.
   */
  endDate: Date;
  /**
   * The selected date, or null if no date is selected.
   */
  selectedDate: Date | null;
  /**
   * Checks if a date is selectable.
   * @param date The date to check.
   * @returns True if the date is selectable, false otherwise.
   */
  isDateSelectable: (date: Date) => boolean;
  /**
   * Handles the click event on a date.
   * @param date The date that was clicked.
   */
  handleDateSelect: (date: Date) => void;
  /**
   * Changes the active month index.
   * @param newActiveMonthIndex The new active month index.
   */
  handleChangePerMonth: (newActiveMonthIndex: number) => void;
  /**
   * Changes the active month index based on the selected year.
   * @param newActiveYear The new active year.
   */
  handleChangePerYear: (newActiveYear: number) => void;
}
