export default class Categorias{
    constructor(){
        this.categorias = []
        this._inscritos = []
    }

    adicionarCategoria(novaCategoria){
        this.categorias.push(novaCategoria)
        this.notificar()
    }
    inscrever(funcao){
        this._inscritos.push(funcao)
    }
    notificar(){
        this._inscritos.forEach((funcao => funcao(this.categorias)))
       
    }
}