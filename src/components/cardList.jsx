import { useState } from "react"
import Card from "./Card"

import avishkar from "../assets/avishkar.jpeg"
import ajay from "../assets/ajay.jpeg"
import yash from "../assets/yash.jpeg"
import rohit from "../assets/rohit.jpeg"
import vansh from "../assets/vansh.jpeg"

function CardList() {
  const [cards] = useState([
    {
      id: 101,
      title: "Avishkar Gunjal",
      description: "Frontend Developer",
      imageUrl: avishkar
    },
    {
      id: 102,
      title: "Ajay Ghadage",
      description: "Backend Developer",
      imageUrl: ajay
    },
    {
      id: 103,
      title: "Yashraj Babar",
      description: "ML service",
      imageUrl: yash
    },
    {
      id: 104,
      title: "Rohit Gaikwad",
      description: "Database Engineer",
      imageUrl: rohit
    },
    {
      id: 105,
      title: "Vansh Deshmukh",
      description: "Frontend & Backend",
      imageUrl: vansh
    }
  ])

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
    padding: "20px"
  }

  return (
    <div style={containerStyle}>
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  )
}

export default CardList