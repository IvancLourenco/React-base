import React, { Component } from "react";
import "./button.css";

const sayHello = () => {
    console.log("Hello");	
}

const Button = (props) => {
   return <button className="btn" onClick={sayHello}>{props.label}</button>
}

Button.defaultProps = {
    label:"Clique aqui com classe"
}

export default Button