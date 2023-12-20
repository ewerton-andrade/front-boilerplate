import profileImg from "../../../public/Assets/perfil.jpg";
import { CardContainer, CloseButton, ImgComponent, ProfileNameContainer } from "./Styled";
import { Badge } from "antd";
import { useState } from "react";
import { CloseOutlined } from "@ant-design/icons"

const Card = () => {

  const [number, setNumber] = useState(5);
  return (
    <a style={{ cursor: "pointer" }} onClick={() => setNumber(0)}>
      <Badge count={number} offset={[-8, 5]} >
        <CardContainer>
          <CloseButton>
            <CloseOutlined style={{ fontSize: "0.7rem"}}/>
          </CloseButton>
          <ImgComponent src={profileImg}/>
          <ProfileNameContainer>
            <p>Ewerton</p>
          </ProfileNameContainer>
        </CardContainer>
      </Badge>
    </a>
  )
}

export default Card