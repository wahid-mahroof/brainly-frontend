import { ReactElement } from "react";

export interface ButtonProps {
  variant: "primary" | "secondary";
  size:"sm"| "md" | "lg";
  text:string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick: ()=>void;
}

const variantStyles = {
  "primary": "bg-purple-600 text-white"
  "secondary": "bg-purple-400 text-purple-600"
}

const sizeStyles = {
  "sm":"p-2",
  "md":"p-4",
  "lg":"p-6"
}

const defaultStyles  = "roounded-md"

export const Button = (props: ButtonProps) =>{
return <button className= {`${variantStyles[props.variant]} $ {defaultStyles} ${sizeStyles[props.size]}`}>{props.text}</button>
}

<Button variant="primary" variant = "secondary" size="md" onClick={() =>{}} text={"wahid"} />