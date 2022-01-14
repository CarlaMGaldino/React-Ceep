import React, { Component } from "react";

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
  }

  _handleMudancaTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  _handleMudancaTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
  }

  _criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto);
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
        <input type="text" placeholder="Titulo" className="form-cadastro_input" onChange={this._handleMudancaTitulo.bind(this)} />
        <textarea rows={7} placeholder="Escreva sua nota..." className="form-cadastro_input" onChange={this._handleMudancaTexto.bind(this)} />
        <button id="button-um" className="form-cadastro_input form-cadastro-submit">
          Criar nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
