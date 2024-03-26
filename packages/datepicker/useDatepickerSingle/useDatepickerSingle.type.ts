export interface IDate {
  /** Represents the date */
  value: number;
  /** Determine if the date is a part of current month */
  isCurrentMonth: boolean;
}

export interface IUseDatePickerParams {
  /** The date instance.*/
  dateInstance: Date;
  /** Function to handle changes to the date instance. */
  onDateInstanceChange(date: Date): void;
}

export interface IDatepickerRef {
  /** Stored selected date value when selecting a date */
  selectedDate?: Date;
}
