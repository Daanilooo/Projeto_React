import Logo from '../logo'
import OpcoesHeader from '../opcoesHeader'
import IconesHeader from '../iconesHeader'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderContainer = styled.header `
    background-color: #fff;
    display: flex;
    justify-content: center;
    text-decoration: none;
    font-style:none;
`

function header() {
    return (
        <HeaderContainer>
            <Link to="/">
            <Logo />
            </Link>
            <OpcoesHeader />
            <IconesHeader />
        </HeaderContainer>
    )
}

export default header