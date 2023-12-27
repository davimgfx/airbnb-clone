import * as React from "react";

import { cn } from "@/libs/utils";
import { FieldErrors, UseFormRegisterReturn } from "react-hook-form";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegisterReturn<string>;
  errors: FieldErrors;
  id: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, id, required, disabled, placeholder, ...props }, ref) => {
    return (
      <input
        placeholder={placeholder}
        id={id}
        disabled={disabled}
        required={required}
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground",
          className
        )}
        {...props.register}
      />
    );
  }
);
Input.displayName = "Input";
