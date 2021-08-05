import React, { Component } from "react";
import Cadastro from "./components/Cadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import "./assets/app.css";
import "./assets/index.css";
import ListaDeCategorias from "./components/ListaDeCategorias";
import Categorias from "./dados/Categorias";
import ArrayDeNotas from "./dados/ArrayDeNotas";

class App extends Component {
  constructor() {
    super();
    this.categorias = new Categorias()
    this.notas = new ArrayDeNotas()
  }


  render() {
    return (
      <section className="conteudo">
        <Cadastro
          categorias={this.categorias}
          criarNota={this.notas.criarNota.bind(this.notas)}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
            categorias={this.categorias}
          />
          <ListaDeNotas
            notas={this.notas}
            apagar={this.notas.apagarNota.bind(this.notas)}
          />
        </main>
      </section>
    );
  }
}

export default App;
