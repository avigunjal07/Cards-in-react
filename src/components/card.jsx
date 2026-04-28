import React from 'react'

const Card = () => {
    function Card({id,title,desc,imgUrl}){
        const cardStyle={
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
        }
        const imgStyle={
            borderRadius:"15px",
            height:"75px",
            width:"75px",
        }
    }
  return (
    <div style={cardStyle}>
        <h3>`ID : ${id}`</h3>
        <img src={imgUrl} alt="" style={imgStyle}/>
        <h4>{title}</h4>
        <p>desc</p>
      
    </div>
  )
}

export default Card
