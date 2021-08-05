import React, { Component } from "react";
import "./style.css";

class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
    this.categoria = "";
    this.state = {categorias: []}
    this._novasCategorias = this._novasCategorias.bind(this)
  }

  componentDidMount(){
    this.props.categorias.inscrever(this._novasCategorias)
  }
  componentWillUnmount(){
    this.props.categorias.desinscrever(this._novasCategorias)
  }
  _novasCategorias(categorias){
    this.setState({...this.state, categorias})
  }
  _handleDigitaTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }
  _handleDigitaTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
  }
  _handleCategoria(evento){
      evento.stopPropagation();
      this.categoria = evento.target.value;
  }
  _criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto, this.categoria);
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
        <select
          onChange={this._handleCategoria.bind(this)}
          className="form-cadastro_input"
        >
            <option>Sem Categoria</option>
          {this.state.categorias.map((categoria,indice) => {
            return <option key = {indice}>{categoria}</option>;
          })}
        </select>

        <input
          className="form-cadastro_input"
          type="text"
          placeholder="Titulo"
          onChange={this._handleDigitaTitulo.bind(this)}
        />

        <textarea
          rows={15}
          className="form-cadastro_input"
          placeholder="Escreva sua nota..."
          onChange={this._handleDigitaTexto.bind(this)}
        />

        <button className="form-cadastro_submit form-cadastro_input">
          Criar Nota
        </button>
      </form>
    );
  }
}
export default Cadastro;
