import { Checkbox, TCheckbox, Typography } from '../../atoms';
import './index.scss'

export type TRadioItem = TCheckbox & {
  content: string,
  className?: string
}

export const RadioItem = ({ content, className, ...props }: TRadioItem) => {
  return (
    <div className={'radio-item ' + className}>
      <div className='radio-item__button'>
        <Checkbox {...props} />
      </div>
      <div className={`radio-item__content ${props.checked && "radio-item__content_checked"}`}>
        <Typography type='light' variant='subtitle'>
          {content}
        </Typography>
      </div>
    </div>
  );
};
