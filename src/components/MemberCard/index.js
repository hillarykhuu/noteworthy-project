import React from 'react'
import Card from 'react-bootstrap/Card';
// import Image from '../../images/members/AmandaSakimura.png'

import './style.css'


export default function MemberCard(props) {
  console.log(props)

  if (props.memInfo) {
    return (
      <Card>
          <a className='CardImageURL'>
              <Card.Img variant="top" src={props.memInfo.imgURL} className='CardImage'/>
          </a>
          <Card.Body>
              <Card.Title>{props.memInfo.name}</Card.Title>
              {/* <Card.Text>{truncateText(props.memInfo.interests, 50)}</Card.Text> Javascript Solution to limiting text */}
              <Card.Text className='CardText'>{props.memInfo.interests}</Card.Text> {/* CSS Solution to limiting text */}
          </Card.Body>
      </Card>
    )
  }
}

// function truncateText(text, maxLength) {
//   // var element = document.querySelector(selector),
//       // truncated = element.innerText;
  

//   if (text.length > maxLength) {
//       text = text.substr(0,maxLength) + '...';
//   }
//   return text;
// }
