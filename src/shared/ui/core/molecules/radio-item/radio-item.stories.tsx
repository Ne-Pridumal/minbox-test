import { Meta, StoryObj } from '@storybook/react'
import { RadioItem } from './radio-item'

const meta: Meta<typeof RadioItem> = {
  title: 'ui/molecules/radio-item',
  component: RadioItem,
}

export default meta

type TRadioItemStory = StoryObj<typeof RadioItem>

export const Default: TRadioItemStory = {
  render: args => <RadioItem {...args} />,
  args: { content: "asdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfhjshjkdhkjh" },
}
