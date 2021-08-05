export default class ArrayDeNotas{
    constructor(){
        this.notas = []
        this._inscritos = []
    }

    criarNota(titulo,texto,categoria){
        const novaNota = new Notas(titulo,texto,categoria) 
        this.notas.push(novaNota)
        this.notificar()
    }
    apagarNota(indice){
        this.notas.splice(indice, 1)
        this.notificar()
    }
    inscrever(funcao){
        this._inscritos.push(funcao)
    }
    desinscrever(funcao){
        this._inscritos = this._inscritos.filter(evento => evento !==funcao)
    }
    notificar(){
        this._inscritos.forEach((funcao => funcao(this.notas)))
    }

}
class Notas{
    constructor(titulo,texto,categoria){
        this.titulo = titulo
        this.texto = texto
        this.categoria = categoria
    }
}
