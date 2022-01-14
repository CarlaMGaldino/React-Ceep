import React, { Component } from "react";
import FormularioCadastro from "./components/Formulariocadastro";
import ListaNotas from "./components/Listanotas";
import "./assets/App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      notas: [],
    };
  }

  criarNota(titulo, texto) {
    const novaNota = { titulo, texto };
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas,
    };

    this.setState(novoEstado);
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="conteudo">
            <section className="imagem-fundo"></section>
            <section className="form-box">
              <FormularioCadastro criarNota={this.criarNota.bind(this)} />
              <ListaNotas notas={this.state.notas} />
            </section>
          </div>
        </div>
        <footer className="footer">Desenvolvido por Carla Galdino Fernandes</footer>
      </div>
    );
  }
}

export default App;
