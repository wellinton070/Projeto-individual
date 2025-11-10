import React from "react";
import Profile from "./componentes/Logo";
import "./App.css";
import { useState } from "react";

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
  const [vencedores, setVencedores] = useState(Array(8).fill(null));

  const setWin = (i, team) =>
    setVencedores((v) => {
      const c = [...v];
      c[i] = team;
      return c;
    });

  const wClass = (i, team) => (vencedores[i] === team ? "vencedor" : "");

  return (
    <div className="titulo">
      <h1>Calendário da Seleção Brasileira</h1>

      <div className="linha">
        <div className="jogo1">
          <Profile
            tamanho={90}
            alt="Logo da Seleção Japao"
            logo={logoJapao}
            onClick={() => setWin(0, "Japão")}
            className={wClass(0, "Japão")}
          />
          <div className="versus-bloco">
            <span className="data-jogo">19.02.2026</span>
            {vencedores[0] && (
              <span className="data-jogo">🏆 Vencedor: {vencedores[0]}</span>
            )}
          </div>
          <Profile
            tamanho={90}
            alt="Logo da Seleção Brasil"
            logo={logoBrasil}
            onClick={() => setWin(0, "Brasil")}
            className={wClass(0, "Brasil")}
          />
        </div>

        <div className="jogo2">
          <Profile
            tamanho={90}
            alt="Logo da Seleção Brasiliera"
            logo={logoBrasil}
            onClick={() => setWin(1, "Brasil")}
            className={wClass(1, "Brasil")}
          />
          <div className="versus-bloco">
            <span className="data-jogo">13.03.2026</span>
            <span className="versus">X</span>
            {vencedores[1] && (
              <span className="data-jogo">🏆 Vencedor: {vencedores[1]}</span>
            )}
          </div>
          <Profile
            tamanho={90}
            alt="Logo da Seleção Argentina"
            logo={logoArgentina}
            onClick={() => setWin(1, "Argentina")}
            className={wClass(1, "Argentina")}
          />
        </div>

        <div className="jogo3">
          <Profile
            tamanho={90}
            alt="Logo da Seleção holanda"
            logo={logoHolanda}
            onClick={() => setWin(2, "Holanda")}
            className={wClass(2, "Holanda")}
          />
          <div className="versus-bloco">
            <span className="data-jogo">02.04.2026</span>
            <span className="versus">X</span>
            {vencedores[2] && (
              <span className="data-jogo">🏆 Vencedor: {vencedores[2]}</span>
            )}
          </div>
          <Profile
            tamanho={90}
            alt="Logo da Seleção Brasil"
            logo={logoBrasil}
            onClick={() => setWin(2, "Brasil")}
            className={wClass(2, "Brasil")}
          />
        </div>

        <div className="jogo4">
          <Profile
            tamanho={90}
            alt="Logo da Seleção Brasiliera"
            logo={logoBrasil}
            onClick={() => setWin(3, "Brasil")}
            className={wClass(3, "Brasil")}
          />
          <div className="versus-bloco">
            <span className="data-jogo">07.04.2026</span>
            <span className="versus">X</span>
            {vencedores[3] && (
              <span className="data-jogo">🏆 Vencedor: {vencedores[3]}</span>
            )}
          </div>
          <Profile
            tamanho={90}
            alt="Logo da Seleção Francesa"
            logo={logoFranca}
            onClick={() => setWin(3, "França")}
            className={wClass(3, "França")}
          />
        </div>
      </div>

      <div className="linha">
        <div className="jogo5">
          <Profile
            tamanho={90}
            alt="Logo da Seleção inglesa"
            logo={logoInglatera}
            onClick={() => setWin(4, "Inglaterra")}
            className={wClass(4, "Inglaterra")}
          />
          <div className="versus-bloco">
            <span className="data-jogo">23.05.2026</span>
            <span className="versus">X</span>
            {vencedores[4] && (
              <span className="data-jogo">🏆 Vencedor: {vencedores[4]}</span>
            )}
          </div>
          <Profile
            tamanho={90}
            alt="Logo da Seleção Brasil"
            logo={logoBrasil}
            onClick={() => setWin(4, "Brasil")}
            className={wClass(4, "Brasil")}
          />
        </div>

        <div className="jogo6">
          <Profile
            tamanho={90}
            alt="Logo da Seleção Brasiliera"
            logo={logoBrasil}
            onClick={() => setWin(5, "Brasil")}
            className={wClass(5, "Brasil")}
          />
          <div className="versus-bloco">
            <span className="data-jogo">12.06.2026</span>
            <span className="versus">X</span>
            {vencedores[5] && (
              <span className="data-jogo">🏆 Vencedor: {vencedores[5]}</span>
            )}
          </div>
          <Profile
            tamanho={90}
            alt="Logo da Seleção Coreana"
            logo={logoCorea}
            onClick={() => setWin(5, "Coreia do Sul")}
            className={wClass(5, "Coreia do Sul")}
          />
        </div>

        <div className="jogo7">
          <Profile
            tamanho={90}
            alt="Logo da Seleção espanhola"
            logo={logoEspanha}
            onClick={() => setWin(6, "Espanha")}
            className={wClass(6, "Espanha")}
          />
          <div className="versus-bloco">
            <span className="data-jogo">18.06.2026</span>
            <span className="versus">X</span>
            {vencedores[6] && (
              <span className="data-jogo">🏆 Vencedor: {vencedores[6]}</span>
            )}
          </div>
          <Profile
            tamanho={90}
            alt="Logo da Seleção Brasil"
            logo={logoBrasil}
            onClick={() => setWin(6, "Brasil")}
            className={wClass(6, "Brasil")}
          />
        </div>

        <div className="jogo8">
          <Profile
            tamanho={90}
            alt="Logo da Seleção Brasiliera"
            logo={logoBrasil}
            onClick={() => setWin(7, "Brasil")}
            className={wClass(7, "Brasil")}
          />
          <div className="versus-bloco">
            <span className="data-jogo">03.07.2026</span>
            <span className="versus">X</span>
            {vencedores[7] && (
              <span className="data-jogo">🏆 Vencedor: {vencedores[7]}</span>
            )}
          </div>
          <Profile
            tamanho={90}
            alt="Logo da Seleção Portuguesa"
            logo={logoPortugal}
            onClick={() => setWin(7, "Portugal")}
            className={wClass(7, "Portugal")}
          />
        </div>
      </div>
    </div>
  );
}