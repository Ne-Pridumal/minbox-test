import { ChangeEvent, forwardRef } from "react";
import "./index.scss"

export type TTextInput = {
  value?: string,
  placeholder?: string,
  onChange: (e: string) => void,
  disabled?: boolean,
  className?: string,
}

export const TextInput = forwardRef<HTMLInputElement, TTextInput>(({ onChange, disabled, placeholder, value, className }, ref) => {
  const event = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (disabled)
      return
    onChange(e.target.value)
  }

  return (
    <div className={"input-wrapper " + className}>
      <input
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={event}
        className="input"
        ref={ref} />
    </div>
  );
});
