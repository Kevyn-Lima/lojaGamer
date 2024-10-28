'use client'
import { Produto } from '@gstore/core'
import useProdutos from '@/data/hooks/useProdutos'
import { useEffect, useState } from 'react'
import TituloProduto from '@/components/produto/TituloProduto'
import InformacoesProduto from '@/components/produto/informacoesProduto'
import BannerCompra from '@/components/produto/bannerCompra'
import MedidorDePreco from '@/components/produto/medidorDePreco'
import AvaliacoesUsuarios from '@/components/produto/avaliacoesUsuarios'
import AvaliacaoEspecializada from '@/components/produto/avaliacaoEspecializada'
import ProdutoNaoEncontrado from '@/components/produto/produtoNaoEncontrado'

export default function PaginaProduto(props: any) {
    const { obterProdutoPorId } = useProdutos()
    const [produto, setProduto] = useState<Produto | null>(null)

    useEffect(() => {
        obterProdutoPorId(+props.params.id).then(setProduto)
    }, [props.params.id, obterProdutoPorId])


    return produto ? (
        <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-10">
                <TituloProduto produto={produto} />
                <InformacoesProduto produto={produto} />
                <BannerCompra produto={produto} />
                <MedidorDePreco produto={produto} />
            </div>
            <AvaliacoesUsuarios produto={produto} />
            <AvaliacaoEspecializada produto={produto} />
        </div>
    ) : (
        <ProdutoNaoEncontrado />
    )
}