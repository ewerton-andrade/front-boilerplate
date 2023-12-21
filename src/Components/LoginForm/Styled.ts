import styled from "styled-components";

const CreateAccountButton = styled.button`
  width: 100%;
  background-color: #4dad40;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
`;

const ForgotPasswordLink = styled.a`
  display: block;
  text-align: center;
  color: #1877f2;
  text-decoration: none;
  margin-bottom: 10px;
`;

const FormContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
`;

const LoginFormStyle = styled.form`
  max-width: 300px;
  width: 100%;
  margin: auto;
  text-align: center;
  border: 1px solid #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;


export {CreateAccountButton, ForgotPasswordLink, FormContainer, LoginFormStyle}