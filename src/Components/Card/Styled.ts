import styled from "styled-components";
import { Button } from "antd";

const CardContainer = styled.div`
  position: relative;
  width: 10rem;
  height: 12.875rem;
  background-color: #fff;
  border-radius: 1rem;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 4px #0000000D;
  border: 2px solid #777;
  cursor: pointer;
  transition: all ease-in-out 400ms;

  &:hover {
    box-shadow: 6px 6px 6px 2px rgba(0, 0, 0, 0.2);
    /* width: 10.5rem;
    height: 13rem; */
    button {
      width: 1.5rem;
      height: 1.5rem;
      background-color: #fff;
      border-radius: 15px;
      color: #555
    }
  }
`

const ProfileNameContainer = styled.div`
  width: 100%;
  height: 2.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-family: 'Poppins', sans-serif;
  }
`

const ImgComponent = styled.img`
  width: 100%;
  border-radius: 0.85rem 0.85rem 0rem 0rem;
  margin: 0px;
  padding: 0px;
`

const CloseButton = styled(Button)`
  position: absolute;
  width: 1.2rem;
  height: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  margin: 0px;
  border-radius: 10px;
  background-color: rgba(192,192,192,0.5);
  border: 0px;
  top: 0.2rem;
  left: 0.2rem;
  color: #fff;
  /* &:hover {
    width: 1.5rem;
    height: 1.5rem;
    background-color: #fff;
  } */
`

export {
  CardContainer, ProfileNameContainer, ImgComponent,
  CloseButton
}