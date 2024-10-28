'use client'
import ProdutoItem from '@/components/produto/produtoItem'
import useProdutos from '@/data/hooks/useProdutos'

export default function Inicio() {
    const { produtos } = useProdutos()
    return (
        <div className="grid grid-cols-4 gap-5 container">
            {produtos.map((produto) => (
                <ProdutoItem key={produto.id} produto={produto}/>
            ))}
        </div>
    )
}