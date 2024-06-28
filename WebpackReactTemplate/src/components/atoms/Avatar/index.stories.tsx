import avatar from '@Assets/icons/avtar.svg'
import { Meta, StoryObj } from '@storybook/react'
import AvatarComponent from './index'

export default {
  component: AvatarComponent,
  tags: ['autodocs'],
} satisfies Meta<typeof AvatarComponent>

type Story = StoryObj<typeof AvatarComponent>

export const Example: Story = {
  args: {
    src: avatar,
    alt: 'account icon',
  },
}
