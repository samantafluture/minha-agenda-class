import React, { Component } from "react";

export default class Cabecalho extends Component {
  render() {
    return (
      <div class="jumbotron">
        <h1 class="display-4">{ this.props.titulo }</h1>
        <p class="lead">
            { this.props.texto }
        </p>
      </div>
    );
  }
}

// Setando valores padrões caso não set no jsx do App

Cabecalho.defaultProps = {
    titulo: 'Não informado',
    texto: 'Não informado'
}