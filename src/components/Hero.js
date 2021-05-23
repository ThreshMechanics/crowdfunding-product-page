import React from 'react'
import styled from 'styled-components'

function Hero() {
    return (
        <Container>
            <ImgContainer>
                <img src='./images/image-hero-mobile.jpg' />
            </ImgContainer>
            <HeroContainer>
                <BambooMonitorContainer>
                    <img class='mastercraft-logo' src='./images/logo-mastercraft.svg' />
                    <h3>Mastercraft Bamboo Monitor Riser</h3>
                    <p>A beautifully handcrafted monitor stand to reduce neck and eye strain.</p>
                    <ButtonContainer>
                        <Button>Back this project</Button>
                        <img src='./images/icon-bookmark.svg' />
                    </ButtonContainer>
                </BambooMonitorContainer>
            </HeroContainer>
        </Container>
    )
}

export default Hero

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`
const HeroContainer = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ImgContainer = styled.div`
    

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const BambooMonitorContainer = styled.div`
    position: absolute;
    width: 80%;
    background-color: white;
    border-radius: 10px;
    top: -5rem;

    h3 {
        font-size: 26px;
    }

`
const ButtonContainer = styled.div`

`

const Button = styled.button`

`