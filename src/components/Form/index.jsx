import React, { Component } from "react";

export default class Form extends Component {
  // Criar um objeto de estado, informando o estado inicial do componente
  state = {
    nome: "",
    telefone: "",
  };

  render() {
    const msgNome = !this.state.nome && (<span className="d-block text-danger mt-1">Nome é obrigatório!</span>);
    const msgTelefone = !this.state.telefone && (<span className="d-block text-danger mt-1">Telefone é obrigatório!</span>);
    const isDisabled = !this.state.nome || !this.state.telefone;

    return (
      <div class="card mb-3 p-3">
        <form id="formCadastro" class="row">
          <div class="form-group col-md-5">
            <label>Nome:</label>
            <input
              type="text"
              id="inputNome"
              value={this.state.nome}
              onChange={(e) => this.setState({ nome: e.target.value })}
              class="form-control"
              placeholder="Digite o nome do contato aqui..."
            />
            { msgNome }
            {/* Retorna ou falso ou span
            Se for string vazia, exibe span
            Se for preenchida, é trufy, logo não exibe nada 
            Se for verdade, exibe o span
            Se for falso, não exibe nada */}
          </div>

          <div class="form-group col-md-5">
            <label>Telefone:</label>
            <input
              type="text"
              id="inputTelefone"
              value={this.state.telefone}
              onChange={(e) => this.setState({ telefone: e.target.value })}
              class="form-control"
              placeholder="Digite o telefone aqui..."
            />
            { msgTelefone }
          </div>

          <div class="form-group col-md-2 mt-3 text-center">
            <button
            disabled={isDisabled}
              id="btnSalvar"
              class="btn btn-primary btn-lg mt-2 w-100"
              type="submit"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    );
  }
}