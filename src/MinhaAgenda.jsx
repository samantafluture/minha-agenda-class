import React, { Component } from "react"; // se está usando class component
import Cabecalho from "./components/Cabecalho";
import Container from "./components/Container";
import Form from "./components/Form";
import TabelaContatos from "./components/TabelaContatos";

class MinhaAgenda extends Component {
  render() {
    return (
      <>

        {/* 
          * Renderiza a classe X 
          * Passo propriedades para o meu componente: titulo e texto
          * Recebo isso via props no index.js para renderizar o que eu passar 
          */}
        
        <Cabecalho titulo="Minha agenda" texto="Confira abaixo sua lista de contatos cadastrados" /> 

        <Container>
          <Form />
        </Container>

        <Container>
          <TabelaContatos />
        </Container>
        
      </>
    );
  }
}

export default MinhaAgenda;
