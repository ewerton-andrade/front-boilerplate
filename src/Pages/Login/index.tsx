import { LoginMainContainer, LoginLeftContainer, LoginRightContainer } from "./Styled";
import Card from "../../Components/Card";

const Login = () => {
  return (
    <LoginMainContainer>
      <LoginLeftContainer>
        <div style={{ display: "flex", alignItems: "center", height: "70%", width: "50%", flexDirection: "column" }}>
          {/* 1rem = 16px 0.5rem = 8px */}
          <p style={{ fontSize: "3rem", fontFamily: "'Poppins', sans-serif", color: "#4287f5", fontWeight: "700", width: "100%", textAlign: "left" }}>facebook</p>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "1.5rem", width: "100%", textAlign: "left", color: "#333" }}>Recent logins</p>
          <p style={{ fontFamily: "'Poppins', sans-serif", color: "#606770", fontSize: "1rem", textAlign: "left", width: "100%"}}>Click your picture or add an account.</p>
          <div  style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", gap: "1rem" }}>
            <Card who="ewerton"/>
            <Card who="Diego"/>
          </div>
        </div>

      </LoginLeftContainer>
        <LoginRightContainer>
          
        </LoginRightContainer>
    </LoginMainContainer>
  )
}

export default Login