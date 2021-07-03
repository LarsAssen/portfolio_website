import React from "react";

interface ButtonProps{
    label: string;
}

const Button: React.FC<ButtonProps> = (props:ButtonProps) => {
    return <div className="button-style">{props.label}</div>
}


export default Button;