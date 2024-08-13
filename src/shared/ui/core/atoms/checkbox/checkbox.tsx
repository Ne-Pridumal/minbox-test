import { forwardRef } from 'react'
import './index.scss'
import { IconChek } from '../icons';

export type TCheckbox = {
  onChange?: (c: boolean) => void,
  disabled?: boolean,
  checked: boolean,
  className?: string
}

export const Checkbox = forwardRef<HTMLInputElement, TCheckbox>(({
  disabled = false,
  onChange,
  checked,
  className,
  ...props
}, ref) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = e.target.checked
    if (onChange) {
      return onChange(newChecked)
    }
  }
  return (
    <div className={"checkbox-wrapper " + className}>
      <label className={`checkbox ${checked && "checkbox_active"} ${disabled && "checkbox_disabled"}`}>
        <input
          type="checkbox"
          className="checkbox__input"
          onChange={handleChange}
          ref={ref}
          disabled={disabled}
          checked={checked}
          {...props}
        />
        <div className="checkbox__content">
          <IconChek width={18} height={18} color='#77c0af' />
        </div>
      </label>
    </div>
  );
});
