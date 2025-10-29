import React from "react";


export default function Profile(props) {

  return (
    <img
      src={props.logo}
      alt={props.alt}
      width={props.tamanho}
      height={props.tamanho}
    />
  );
}