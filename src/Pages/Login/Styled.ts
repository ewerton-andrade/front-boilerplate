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
    background-color: #f0f2f5;
    display: flex;
    justify-content: center;
    align-items: center;
`

const LoginRightContainer = styled.div`
    height: 100%; 
    width: 50%;
    background-color: #f0f2f5;
`

export { LoginMainContainer, LoginLeftContainer, LoginRightContainer }