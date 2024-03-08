import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import './estilo.css'
const icones = [perfil,sacola]

function iconesHeader(){
    return(
        <ul className='icones'>
          {icones.map((icone)=>(
            <li className='icone'><img src={icone}></img></li>
          ))}
        </ul>
    )
}

export default iconesHeader