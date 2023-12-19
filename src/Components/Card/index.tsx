import profileImg from "../../../public/Assets/perfil.jpg";

const Card = () => {
  return (
    <div style={{ width: "10rem", height: "12.875rem", backgroundColor: "#fff", borderRadius: "1rem", margin: "0px", padding: "0px" }}>
      <img src={profileImg} style={{ width: "100%", borderRadius: "1rem 1rem 0rem 0rem", margin: "0px", border: "1px solid red", padding: "0px" }}/>
      <div style={{ border: "1px solid red", width: "100%", height: "2.875rem", margin: "0px", padding: "0px" }}>
        <p style={{ margin: "0px", padding: "0px" }}>Ewerton</p>
      </div>
    </div>
  )
}

export default Card