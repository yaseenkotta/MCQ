import React from 'react'
import styled from 'styled-components'

function LoginButton({color}) {
  return (  <Container href='/qustion' hii={color}>HII</Container>
    
  )
}

export default LoginButton

const Container=styled.a`
color:${({hii})=> hii};
background-color:green`