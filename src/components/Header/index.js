import React from 'react'
import Button from 'react-bootstrap/Button';
import logo from './../../images/noteworthy bear w text 2.png'

export default function Header() {
  return (
    <div className='flex flex-row justify-between p-2'>
      <img src={logo} width={128} height={128} alt="Noteworthy Bear Logo" className='bg-white/50 rounded-3xl p-1'/>

      <div className='flex items-start gap-3'>
        <Button variant="light" size='lg' style={{color: "#05789F"}}>About Us</Button>
        <Button variant="light" size='lg' style={{color: "#05789F"}}>Our Favorite Videos</Button>
        <Button variant="light" size='lg' style={{color: "#05789F"}}>People of Note</Button>
      </div>
    </div>
  )
}
