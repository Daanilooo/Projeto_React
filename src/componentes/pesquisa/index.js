import Input from "../input"
import styled from "styled-components"
import { useState } from "react"
import { useEffect } from "react"
import { getLivros } from "../../servicos/livros"
import { postFavorito } from "../../servicos/favoritos"

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
    padding-bottom : 200px;
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`
const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`
const Resultados = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
const Resultado = styled.div`

    margin: 20px;
    cursor: pointer;
    transition: 0.4s all;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        transform: scale(1.1)
        border: 1px solid white;
    }
`

function Pesquisa() {
    const [LivrosPesquisados, setLivrosPesquisados] = useState([])
    const [livros, setLivros] = useState([])
    
    async function fetchLivros(){
        const livrsodaAPI = await getLivros()
        setLivros(livrsodaAPI)       
    }

    async function insertFavorito(id){
        await postFavorito(id)
        alert(`Livro de id:${id} inserido!`)
    }
    useEffect(() => {
        fetchLivros()
    }, [])

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante</Subtitulo>
            <Input placeholder="Escreva sua próxima leitura" onBlur={evento =>{
                const textoDigitado = evento.target.value
                if (textoDigitado !== "") {
                    const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
                    setLivrosPesquisados(resultadoPesquisa)
                } else {
                    setLivrosPesquisados([])
                }

            } } />
            <Resultados>
            {LivrosPesquisados.map( livro =>(
                <Resultado onClick={()=> insertFavorito(livro.id)}>
                    <img src={livro.src}/>
                    <p>{livro.nome}</p>
                </Resultado>
            )) }
            </Resultados>

        </PesquisaContainer>
    )
}

export default Pesquisa