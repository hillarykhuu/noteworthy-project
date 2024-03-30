import React from 'react'
import Header from '../../components/Header'
import ReactCurvedText from 'react-curved-text';



export default function LandingPage() {
  return (
    <div className='bg-group-photo h-screen bg-cover' id='LandingDiv'>
      <div className='fixed top-0 w-full'>
        <Header className='sticky top-0' />
      </div>
      <div className='flex justify-center items-center h-full'>

        <ReactCurvedText 
          className="absolute left-auto right-auto"
          width={600}
          height={400}
          cx={300}
          cy={250}
          rx={250}
          ry={150}
          startOffset={75}
          reversed={true}
          text="NOTEWORTHY"
          textProps={{ style: { fontSize: 72, fontWeight: "bold", fill: "white", filter: "drop-shadow( 3px 8px 4px rgba(0, 0, 0, .7))"} }}
          textPathProps={null}
          tspanProps={null}
          ellipseProps={null}
          svgProps={null}/>
          <p className=' absolute left-auto right-auto text-7xl font-bold text-white drop-shadow-[3px_8px_4px_rgba(0,0,0,0.7)]'>
            A CAPELLA
          </p>
      </div>

      
    </div>
  )
}
