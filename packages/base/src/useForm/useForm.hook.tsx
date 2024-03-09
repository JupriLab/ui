import { FormEvent, RefObject, createRef } from "react";
import type { IBindValidationProps } from "./useForm.type";

let refs: Record<string, RefObject<any>> = {};

const useForm = () => {
  const onSubmit = (cb?: () => void) => (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (cb) cb();
  };
  const bind = (name: string, validation?: IBindValidationProps) => {
    const ref = createRef<any>();
    refs = {
      ...refs,
      [name]: ref,
    };
    return {
      name,
      ref,
    };
  };

  return { onSubmit, bind };
};

export default useForm;
