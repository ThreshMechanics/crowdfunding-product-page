import React from 'react'
import styled from 'styled-components'

function Stats() { 
    return (
        <Container>
            <StatsContainer>
                <h3>$89,914</h3>
                <p>of $100,000 backed</p>
                <h3>5,007</h3>
                <p>total backers</p>
                <h3>56</h3>
                <p>days left</p>
                <BarContainer>
                    <BarFilled />
                </BarContainer>
            </StatsContainer>
        </Container>
    )
}

export default Stats

const Container = styled.div`
    margin-top: 15rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const StatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justfiy-content: center;
    align-items: center;
    box-shadow: 0px 0px 4px .5px #dfdfdf;
    padding: 10px;
    width: 80%;
    background-color: white;
    border-radius: 10px;
    
    h3 {
        font-size: 35px;
        margin: 0;
        margin-top: .5rem;
    }

    p{
        font-size: 16px;
        width: 50%;
        color: gray;
        line-height: 23px;
        border-bottom: 2px solid #dfdfdf;
        margin-top: -1rem;;
        line-height: 4rem;
    }
`

const BarContainer = styled.div`
    background-color: #dfdfdf;
    height: 10px;
    width: 90%;
    margin-top: -1.3rem;
    border-radius: 5px;
    margin-bottom: 1.5rem;
`
const BarFilled = styled.div`
    height: 10px;
    width: 75%;
    background-color: #3db4ab;
` 