import profileImg from "../../../public/Assets/perfil.jpg";

const Card = () => {
  return (
    <div style={{ width: "10rem", height: "12.875rem", backgroundColor: "#fff", borderRadius: "1rem", margin: "0px", padding: "0px", display: "flex", flexDirection: "column", boxShadow: "0px 2px 4px #0000000D", border: "2px solid #777" }}>
      <img src={profileImg} style={{ width: "100%", borderRadius: "0.85rem 0.85rem 0rem 0rem", margin: "0px", padding: "0px" }}/>
      <div style={{ width: "100%", height: "2.875rem", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <p style={{ fontFamily: "'Poppins', sans-serif" }}>Ewerton</p>
      </div>
    </div>
  )
}

export default Card