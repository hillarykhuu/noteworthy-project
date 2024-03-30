import React from 'react'

export default function AboutUsPage() {
  return (
    <div className='h-screen' id='AboutUsDiv'> 
      {/* Header */}
      <p>About Us</p>

      {/* Description */}
      <div>
        <img />

        <p className='text-center'>
          <span style={{ whiteSpace: 'pre-line' }} >
            {`We’re a lower-voices a cappella group known for our fun performances and fresh takes on popular songs! It always feels sunny when we perform, and not just because of our golden vests!
            
            Since our founding in 2000, we’ve gone million-view-viral on YouTube multiple times, released an album entirely composed of original songs, and performed at the 2022 UC Berkeley commencement.
            `}
          </span>
        </p>

        <img />
      </div>


      <div>
        <div>
          Events
        </div>
        <div>
          Hire Us
        
        </div>
        <div>
          Follow Us
        </div>     
      </div>
      

    </div>
  )
}
