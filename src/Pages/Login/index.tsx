import { LoginMainContainer, LoginLeftContainer, LoginRightContainer } from "./Styled"
import { AppleOutlined }  from "@ant-design/icons"

const Login = () => {
  return (
    <LoginMainContainer>
      <LoginLeftContainer>
        <div style={{ border: "1px solid red", display: "flex", justifyContent: "space-between" }}>
          <AppleOutlined />
          <p>Nosso sistema</p>
        </div>
        <div style={{ border: "1px solid red" }}>
          
        </div>
        <div style={{ border: "1px solid red" }}>

        </div>
      </LoginLeftContainer>
        <div style={{ border: "3px solid blue", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#ffffff", height: "100%", width: "50%"}}>
          <div style={{border: "3px solid magenta", display: "flex", alignItems: "center", justifyContent: "center", height: "50%", width: "50%"}}>
              <p>COMPONENTE DE LOGIN</p>
          </div>
        </div>
    </LoginMainContainer>
  )
}

export default Login