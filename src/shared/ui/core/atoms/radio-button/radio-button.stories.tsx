import { Meta, StoryObj } from '@storybook/react'
import { RadioButton, TRadioButton } from './radio-button'
import { Typography } from '../typography'


const RadioComponent = (props: TRadioButton) => {
  return (
    <RadioButton {...props}>
      <Typography variant='tiny' type='light'>
        Test
      </Typography>
    </RadioButton>
  )
}

const meta: Meta<typeof RadioButton> = {
  title: 'ui/atoms/radio-button',
  component: RadioButton,
}

export default meta

type TRadioButtonStory = StoryObj<typeof RadioButton>

export const Default: TRadioButtonStory = {
  render: args => <RadioComponent {...args} />,
  args: {
    checked: true,
  },
}
