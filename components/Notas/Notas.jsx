import React, { Component } from 'react'
import './style.css'
import {ReactComponent as DeleteSVG} from '../../components/img/deletee.svg'

class Notas extends Component {

    deletar(){
        const indice = this.props.indice
        this.props.apagar(indice)
    }

    render() {
        return (
            <section className='nota'>
                <header className='nota_cabecalho'>
                    <h3 className='nota_titulo'>{this.props.titulo}</h3>
                    <DeleteSVG onClick={this.deletar.bind(this)}/>
                    <h4>{this.props.categoria}</h4>
                </header>
                <p className='nota_texto'>{this.props.texto}</p>
            </section>
        )
    }
}
export default Notas