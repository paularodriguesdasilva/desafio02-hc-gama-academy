import React from "react";

import { Container, LinkBack } from "./style";

export default function Login() {
  function handleSubmit(e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let cep = document.getElementById("cep").value;

    const data = {
      name,
      email,
      address,
      cep,
    };

    let dataConverted = JSON.stringify(data);

    localStorage.setItem("dados-cadastro", dataConverted);
    alert("Cadastro efetuado com sucesso!");
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          id="name"
          type="text"
          aria-label="Nome Completo"
          placeholder="Nome Completo"
        />

        <input id="email" type="email" aria-label="Email" placeholder="Email" />

        <input
          id="address"
          type="text"
          aria-label="Endereço Completo"
          placeholder="Endereço Completo"
        />

        <input id="cep" type="text" aria-label="CEP" placeholder="CEP" />

        <button type="submit">Cadastrar</button>
        <LinkBack to="/">Home</LinkBack>
      </form>
    </Container>
  );
}
