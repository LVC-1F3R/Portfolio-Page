import React from 'react'
import RESUME from '../../assets/resume.docx'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={RESUME} download className='btn'>Download Resume</a>
        <a href="mailto:iskrydev@gmail.com" target="_blank" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
