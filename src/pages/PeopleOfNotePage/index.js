import React from 'react'
import './style.css'
import MemberCard from '../../components/MemberCard'
import MemberModal from '../../components/MemberModal';

export default function PeopleOfNotePage() {
  const [modalShow, setModalShow] = React.useState(false);




  return (
    <div id='PeopleOfNoteDiv'>
      <h2>People Of Note</h2>
      <p>Click on our images to learn more!</p> 
      <div className='Members'>
        <div onClick={() => setModalShow(true)} >
          <MemberCard />
        </div>
        <MemberCard />
        <MemberCard />
        <MemberCard />
      </div>

      <p>Click here to see our alumni.</p>

      <MemberModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}
