import React from 'react'
import CV from '../../assets/Resume_Nikhil_Mane.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>let's Talk</a>
    </div>
  )
}

export default CTA