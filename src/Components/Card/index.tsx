import ewerton from "/Assets/perfil.jpg";
import diego from "/Assets/diegoface.jpg"
import { CardContainer, CloseButton, ImgComponent, ProfileNameContainer } from "./Styled";
import { Badge } from "antd";
import { useState } from "react";
import { CloseOutlined } from "@ant-design/icons"

type Props = {
  who: string
}

const Card = (test: Props) => {

  const [number, setNumber] = useState(5);
  return (
    <a style={{ cursor: "pointer" }} onClick={() => setNumber(0)}>
      <Badge count={number} offset={[-8, 5]} >
        <CardContainer>
          <CloseButton>
            <CloseOutlined style={{ fontSize: "0.7rem"}}/>
          </CloseButton>
          <ImgComponent src={test.who === "ewerton" ? ewerton : diego}/>
          <ProfileNameContainer>
            <p>{test.who}</p>
          </ProfileNameContainer>
        </CardContainer>
      </Badge>
    </a>
  )
}

export default Card