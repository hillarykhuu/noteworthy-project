import React from 'react'
import Card from 'react-bootstrap/Card';
import Image from '../../images/members/AmandaSakimura.png'

import './style.css'


export default function MemberCard() {
  return (
    <Card>
        <a>
            <Card.Img variant="top" src={Image} className='CardImage'/>
        </a>
        <Card.Body>
            <Card.Title>Amanda Sakimura</Card.Title>
            <Card.Text>
            aeiou aeiou aeiou john madden...
            </Card.Text>
        </Card.Body>
    </Card>
  )
}
