import React from "react";
import { Profile } from "./componentes/Logo";
import "./App.css";

export default function App() {
  return (
    <div className="titulo">
      <Profile tamanho={90} alt="Logo grande da Seleção" />
      <h1>Calendário da Seleção Brasileira</h1>
      <Profile tamanho={90} alt="Logo grande da Seleção" />
    </div>
  );
}