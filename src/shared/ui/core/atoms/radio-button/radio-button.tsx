import { forwardRef, MouseEvent, ReactNode } from 'react'
import './index.scss'

export type TRadioButton = {
  id?: string,
  checked: boolean,
  onChange?: (checked: boolean) => void,
  onClick?: (e: MouseEvent<HTMLInputElement>) => void,
  disabled?: boolean,
  className?: string,
  children?: ReactNode,
  name?: string,
  value?: string | number
}

export const RadioButton = forwardRef<HTMLInputElement, TRadioButton>((
  { className, onChange, id, checked, disabled, children, ...props }, ref) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = e.target.checked
    if (onChange) {
      return onChange(newChecked)
    }
  }

  return (
    <div className={"radio-button-wrapper " + className}>
      <label className={`radio-button ${checked ? "radio-button_active" : ""}`}>
        <input
          id={id}
          type='radio'
          className="radio-button__input"
          onChange={handleChange}
          ref={ref}
          disabled={disabled}
          checked={checked}
          {...props}
        />
        <div className='radio-button__content'>
          {children}
        </div>
      </label>
    </div >
  );
});
