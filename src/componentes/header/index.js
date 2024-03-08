import './estilo.css'
import Logo from '../logo'
import OpcoesHeader from '../opcoesHeader'
import IconesHeader from '../iconesHeader'

function header() {
    return (
        <header className="App-header">
            <Logo />
            <OpcoesHeader />
            <IconesHeader />

        </header>
    )
}

export default header