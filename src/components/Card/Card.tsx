import React from 'react'

interface CardProps {
  Title: string
  Image?: string
  Alt?: string
  Body: JSX.Element | string
}

const Card: React.FC<CardProps> =
  ({ Title, Image, Alt, Body }) => (
    <div className="card">
      <div className="title">{Title}</div>
      {/* {Image &&
        <div className="image">
          <img src={Image} alt={Alt} />
        </div> */}
      }
      <div className="body">{Body}</div>
    </div>
  )

export default Card;