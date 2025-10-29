import React from "react";
import Profile from "./componentes/Logo";
import "./App.css";

import logoArgentina from "./assets/argentina.png";
import logoBrasil from "./assets/logoselecao.svg";
import logoCorea from "./assets/corea.png";
import logoEspanha from "./assets/espanha.png";
import logoFranca from "./assets/franca.png";
import logoHolanda from "./assets/holanda.png";
import logoInglatera from "./assets/inglatera.png";
import logoJapao from "./assets/japao.png";
import logoPortugal from "./assets/portugal.png";

export default function App() {
  return (
    <div className="titulo">
      <h1>Calendário da Seleção Brasileira</h1>
      <Profile 
        tamanho={90}  
        alt="Logo da Seleção Japao" 
        logo={logoJapao} 
      />
      <Profile 
        tamanho={90}  
        alt="Logo da Seleção Brasil" 
        logo={logoBrasil} 
      />
      <Profile 
        tamanho={90}  
        alt="Logo da Seleção Holanda" 
        logo={logoHolanda} 
      />
      <Profile 
        tamanho={90}  
        alt="Logo da Seleção Argentina" 
        logo={logoArgentina} 
      />
      <Profile 
        tamanho={90}  
        alt="Logo da Seleção Corea" 
        logo={logoCorea} 
      />
      <Profile 
        tamanho={90}  
        alt="Logo da Seleção Espanha" 
        logo={logoEspanha} 
      />
      <Profile 
        tamanho={90}  
        alt="Logo da Seleção Frnaca" 
        logo={logoFranca} 
      />
      <Profile 
        tamanho={90}  
        alt="Logo da Seleção inglesa" 
        logo={logoInglatera} 
      />
       <Profile 
        tamanho={90}  
        alt="Logo da Seleção Portuguesa " 
        logo={logoPortugal} 
      />
    </div>
 
  );
}