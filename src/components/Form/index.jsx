import React, { Component } from "react";

export default class Form extends Component {
  // Criar um objeto de estado, informando o estado inicial do componente
  state = {
    nome: "",
    telefone: "",
  }

  // Quando usamos métodos, precisamos forçar o this, através do construtor
  // Fazer um bind -> associação de qual objeto vai ser a referência do método quando executado
  // Já a arrow function -> this é definido no momento de criação e não de execução
  // constructor() {
  //   super();
  //   this.handleFormSubmit = this.handleFormSubmit.bind(this);
  // }
  
  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.addContatoCallback(this.state.nome, this.state.telefone); 
    this.setState({ nome: '', telefone: '' }); // re-setando os campos
  }

  // toda vez que eu mudo o estado, o render é chamado de novo

  render() {
    const msgNome = !this.state.nome && (<span className="d-block text-danger mt-1">Nome é obrigatório!</span>);
    const msgTelefone = !this.state.telefone && (<span className="d-block text-danger mt-1">Telefone é obrigatório!</span>);
    const isDisabled = !this.state.nome || !this.state.telefone;

    return (
      <div className="card mb-3 p-3">
        <form id="formCadastro" className="row" onSubmit={ this.handleFormSubmit }>
          <div className="form-group col-md-5">
            <label>Nome:</label>
            <input
              type="text"
              id="inputNome"
              value={this.state.nome}
              onChange={(e) => this.setState({ nome: e.target.value })}
              className="form-control"
              placeholder="Digite o nome do contato aqui..."
            />
            { msgNome }
            {/* Retorna ou falso ou span
            Se for string vazia, exibe span
            Se for preenchida, é trufy, logo não exibe nada 
            Se for verdade, exibe o span
            Se for falso, não exibe nada */}
          </div>

          <div className="form-group col-md-5">
            <label>Telefone:</label>
            <input
              type="text"
              id="inputTelefone"
              value={this.state.telefone}
              onChange={(e) => this.setState({ telefone: e.target.value })}
              className="form-control"
              placeholder="Digite o telefone aqui..."
            />
            { msgTelefone }
          </div>

          <div className="form-group col-md-2 mt-3 text-center">
            <button
            disabled={isDisabled}
              id="btnSalvar"
              className="btn btn-primary btn-lg mt-2 w-100"
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
