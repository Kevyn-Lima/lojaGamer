import Precificavel from "./precificavel"
import Especificacoes from "./especificacoes"

export default interface Produto extends Precificavel{
    id: number
    nome: string
    descricao: string
    marca: string
    modelo: string
    imagem: string
    nota: number
    videoReview: string
    tags: string []
    especificacoes: Especificacoes
}