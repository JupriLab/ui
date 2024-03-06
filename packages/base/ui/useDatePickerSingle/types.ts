/**
 * Represents a date object with year, month, and day properties.
 */
export interface IDateObjectProps {
  year: number;
  month: number;
  day: number;
}

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
  onDateSelected?: (date: IDateObjectProps) => void;
}
