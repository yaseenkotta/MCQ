import React from 'react'
import styled from 'styled-components'
import ContinueButton from './buttons/ContinueButton'

export const CenterContainer = () => {
  return (
    <Container><ListStyle><ListItems><Head>Lets Start</Head></ListItems>
    <ListItems><ContinueButton /></ListItems></ListStyle></Container>
  )
}



const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const ListStyle = styled.ul`
    list-style: none;
    
    
    
`

const Head = styled.h1`
    font-size: 36px;


`

const ListItems = styled.li`
    text-align: center;
`
