import { Typography as TypographyComponent } from './typography';

import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof TypographyComponent> = {
  title: 'ui/atoms/typography',
  component: TypographyComponent,
}

export default meta

type TTypographyComponentStory = StoryObj<typeof TypographyComponent>

export const Default: TTypographyComponentStory = {
  render: args => <TypographyComponent {...args} />,
  args: { children: "Content", variant: 'title-h1', type: 'light' },
}
