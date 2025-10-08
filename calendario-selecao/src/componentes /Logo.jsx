import React, { Children } from "react"
import Logo from "../assets/logoselecao.svg"

export function Profile() {
  return <img src={Logo} alt="imagem da logo" />
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  )
}
