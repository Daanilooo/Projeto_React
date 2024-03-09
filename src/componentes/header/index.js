import Logo from '../logo'
import OpcoesHeader from '../opcoesHeader'
import IconesHeader from '../iconesHeader'
import styled from 'styled-components'

const HeaderContainer = styled.header `
    background-color: #fff;
    display: flex;
    justify-content: center;

`

function header() {
    return (
        <HeaderContainer>
            <Logo />
            <OpcoesHeader />
            <IconesHeader />
        </HeaderContainer>
    )
}

export default header