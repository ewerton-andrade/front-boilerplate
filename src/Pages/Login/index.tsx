import { LoginMainContainer, LoginLeftContainer, LoginRightContainer } from "./Styled";
import Card from "../../Components/Card";

const Login = () => {
  return (
    <LoginMainContainer>
      <LoginLeftContainer>
        <div style={{ display: "flex", alignItems: "center", height: "65%", width: "50%", flexDirection: "column", border: "1px solid blue" }}>
          {/* 1rem = 16px 0.5rem = 8px */}
          <p style={{ fontSize: "6rem", fontFamily: "'Poppins', sans-serif", color: "#4287f5", fontWeight: "700", width: "100%", textAlign: "left" }}>facebook</p>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "3rem", width: "100%", textAlign: "left", color: "#333" }}>Recent logins</p>
          <p style={{ fontFamily: "'Poppins', sans-serif", color: "#606770", fontSize: "1rem", textAlign: "left", width: "100%"}}>Click your picture or add an account.</p>
          <div  >
            <Card />
          </div>
        </div>

      </LoginLeftContainer>
        <LoginRightContainer>
          
        </LoginRightContainer>
    </LoginMainContainer>
  )
}

export default Login