import { LoginMainContainer, LoginLeftContainer, LoginRightContainer } from "./Styled";
import Card from "../../Components/Card";
import { Button, Divider, Form, Input } from 'antd'; 
import ModalCreate from "../../Components/Modal";

const Login = () => {

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

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
          <div style={{ backgroundColor: "#fff", borderRadius: "0.5rem", padding: "1rem"}}>
            <Form
              name="normal_login"
              // className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: 'Please input your Username!' },
                  { type: "email", message: "Apenas emails"}
                ]}
                style={{ margin: "0.5rem" }}
              >
                <Input placeholder="Email" style={{ width: "22.75rem", height: "3.25rem", padding: "0.84rem 1 rem", fontSize: "1.1rem", borderRadius: "0.4rem", fontFamily: "'Poppins', sans-serif" }}/>
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Passowrd!' }]}
                style={{ margin: "0.5rem" }}
              >
                <Input.Password placeholder="Password" style={{ width: "22.75rem", height: "3.25rem", padding: "0.84rem 1 rem", fontSize: "1.1rem", borderRadius: "0.4rem", fontFamily: "'Poppins', sans-serif" }}/>
              </Form.Item>
              <Form.Item
                style={{ margin: "0.5rem" }}
              >
                <Button style={{ width: "22.75rem", height: "3.25rem", padding: "0.84rem 1 rem", fontSize: "1.25rem", borderRadius: "0.4rem", backgroundColor: "#1877f2", color: "#fff", fontFamily: "'Poppins', sans-serif"}}>Entrar</Button>
              </Form.Item>
            </Form>
            <Button type="link" style={{ width: "100%", fontSize: "1rem" }}>Esqueceu a senha?</Button>
            <Divider />
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
              <Button style={{ height: "3.25rem", padding: "0.84rem 1 rem", fontSize: "1rem", borderRadius: "0.4rem", backgroundColor: "#42b72a", color: "#fff", fontFamily: "'Poppins', sans-serif", fontWeight: "600", marginBottom: "0.5rem"}}>Criar nova conta</Button>
            </div>
          </div>
        </LoginRightContainer>
        <ModalCreate />
    </LoginMainContainer>
  )
}

export default Login