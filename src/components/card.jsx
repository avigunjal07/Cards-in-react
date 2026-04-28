function Card({ id, imageUrl, title, description }) {
  const cardStyle = {
    width: "250px",
    // borderRadius: "15px",
    // boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    // padding: "15px",
    // textAlign: "center",
    // backgroundColor: "#E6EEC9"
  }

  const imgStyle = {
    borderRadius: "50%",
    height: "180px",
    // width: "180px",
    // objectFit: "cover",
    // marginBottom: "10px",
    // border: "3px solid rgba(125, 167, 140, 0.5)"
  }

  return (
    <div style={cardStyle}>
      <h3>ID : {id}</h3>
      <img src={imageUrl} alt="" style={imgStyle} />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  )
}

export default Card