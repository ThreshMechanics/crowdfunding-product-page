import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Nav>
            <LogoContainer>
                <img src='./images/logo.svg' />
            </LogoContainer>
            <MobileMenuContainer>
                <img src='./images/icon-hamburger.svg' />
            </MobileMenuContainer>
        </Nav>
    )
}

export default Header

const Nav = styled.div`
    background-color: rgba(0,0,0,0);
    position: absolute;
    width: 100vw;
    display: flex;
    align-items: center;
    height: 6rem;
`

const LogoContainer = styled.div`
    width: 50%;
    display: flex;

    img {
        padding-left: 2rem;
        justify-self: start;
    }
    
`

const MobileMenuContainer = styled.div`
    width: 5%;
    margin-left: 9rem;
`