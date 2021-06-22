import React, { Component } from "react"; // se está usando class component
import Cabecalho from "./components/Cabecalho";
import Container from "./components/Container";
import Form from "./components/Form";
import TabelaContatos from "./components/TabelaContatos";

class MinhaAgenda extends Component {
  state = {
    contatos: []
  }

  addContato = (nome, telefone) => {
    const contatos = this.state.contatos; // peguei a lista
    const contato = { nome, telefone }; // criei objeto
    contatos.push(contato); // add contato no array lista
    this.setState({ contatos }); // atualizar estado
  }

  removeContato = (indice) => {
    const contatos = this.state.contatos;
    contatos.splice(indice, 1); // remove o item indice n, apenas 1 item, ele mesmo
    this.setState({ contatos });
  }

  render() {
    return (
      <>

        {/* 
          * Renderiza a classe X 
          * Passo propriedades para o meu componente: titulo e texto
          * Recebo isso via props no index.js para renderizar o que eu passar 
          */}
        
        <Cabecalho titulo="Minha agenda" texto="Confira abaixo sua lista de contatos cadastrados" /> 

        {/* Passo a referência de uma função para o formulário usar quando necessário */}

        <Container>
          <Form addContatoCallback={ this.addContato } /> 
        </Container>

        <Container>
          <TabelaContatos removeContatoCallback={ this.removeContato } listaContatos={ this.state.contatos } />
        </Container>
        
      </>
    );
  }
}

export default MinhaAgenda;
