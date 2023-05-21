import Main from '.'
import type { Meta, StoryObj } from '@storybook/react';


const meta: Meta<typeof Main> = {
    title: 'Main',
    component: Main
}

export default meta

type Story = StoryObj<typeof Main>

export const Basic: Story = {
    args: {
        title: 'React Avançado',
        description: 'Typescript, ReactJS e Styled Components'
    },
    render: (args) => <Main {...args} />
}