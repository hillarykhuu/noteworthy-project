import React from 'react'
import Header from '../../components/Header'
import ReactCurvedText from 'react-curved-text';



export default function LandingPage() {
  return (
    <div className='bg-group-photo h-screen bg-cover'>
      <div className='fixed top-0 w-full'>
        <Header className='sticky top-0' />
        <ReactCurvedText             
            width={300}
            height={300}
            cx={250}
            cy={150}
            rx={100}
            ry={100}
            startOffset={0}
            reversed={false}
            text="Noteworthy"
            textProps={{ style: { fontSize: 24 } }}
            textPathProps={null}
            tspanProps={null}
            ellipseProps={null}
            svgProps={null}/>
      </div>
    </div>
  )
}
