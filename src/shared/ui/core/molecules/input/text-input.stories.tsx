import { Meta, StoryObj } from '@storybook/react'
import { TextInput } from './text-input'

const meta: Meta<typeof TextInput> = {
  title: 'ui/molecules/text-input',
  component: TextInput,
}

export default meta

type TTextInputStory = StoryObj<typeof TextInput>

export const Default: TTextInputStory = {
  render: args => <TextInput {...args} />,
  args: {
    placeholder: "What needs to be done ?"
  },
}
