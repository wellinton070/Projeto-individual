
import React from "react";

export default function Profile(props) {
  return (
    <img
      src={props.logo}
      alt={props.alt}
      width={props.tamanho}
      height={props.tamanho}
      onClick={props.onClick}      
      className={props.className}   
      style={{ cursor: props.onClick ? "pointer" : "default" }}
    />
  );
}