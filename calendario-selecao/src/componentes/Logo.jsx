import React from "react";
import Logo from "../assets/logoselecao.svg";

export function Profile({ tamanho = 90, alt = "Logo da Seleção Brasileira" }) {
  return (
    <img
      src={Logo}
      alt={alt}
      width={tamanho}
      height={tamanho}
      style={{ borderRadius: "10px" }}
    />
  );
}