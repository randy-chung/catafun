import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import SplButton from './Button';

export default {
    component: SplButton,
    title: 'Examples / Button',
    argTypes: {
        // backgroundColor: { control: 'color' },
        label: {
            name: 'label',
            // type: { name: 'string', required: false },
            type: 'string',
            defaultValue: 'Button',
            description: 'This is the text that will appear on the button.'
        },
    }
} as Meta;

export const Basic = (props) => {
    return (
        <SplButton {...props}></SplButton>
    )
}