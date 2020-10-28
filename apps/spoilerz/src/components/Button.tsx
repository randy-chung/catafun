import React from 'react';

const Button = ({label = 'Button', ...props}) => {
    return (
        <button type="button" {...props}>
            {label}
        </button>
    )
};

const SplButton: React.FC<any> = (props: any) => {
    return (
        <Button {...props}></Button>
    );
}

export default SplButton;