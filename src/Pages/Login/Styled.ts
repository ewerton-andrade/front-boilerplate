import styled from "styled-components";

const LoginMainContainer = styled.div`
  background-color: #ddd;
  width: 100vw;
  height: 100vh;
  display: flex;
`

const LoginLeftContainer = styled.div`
    border: 3px solid red; 
    height: 100%; 
    width: 50%;
    background-color: #3464eb;
`

const LoginRightContainer = styled.div`
    height: 100%; 
    width: 50%;
    background-color: #ffffff;
`

export { LoginMainContainer, LoginLeftContainer, LoginRightContainer }