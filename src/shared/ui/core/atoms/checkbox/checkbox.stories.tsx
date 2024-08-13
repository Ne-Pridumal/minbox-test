import { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'ui/atoms/checkbox',
  component: Checkbox,
}

export default meta

type TCheckboxStory = StoryObj<typeof Checkbox>

export const Default: TCheckboxStory = {
  render: args => <div style={{ display: 'flex' }}><Checkbox {...args} /></div>,
  args: { checked: true },
}
