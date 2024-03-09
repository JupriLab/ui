export interface IInputValidationObject {
  value: boolean;
  message?: string;
  pattern?: RegExp;
}

export interface IBindValidationProps {
  required?: boolean | IInputValidationObject;
}
