import React from "react";

interface ButtonProps{
    label: string;
}

const Button: React.FC<ButtonProps> = (props:ButtonProps) => {
    return <div data-testid="button" className="button-style">{props.label}</div>
}


export default Button;