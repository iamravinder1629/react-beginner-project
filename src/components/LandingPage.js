import React from 'react'
import '../components/LandingPage.css'

function LandingPage(props) {
  return (

    <>
      <div className='landing align-items-center d-flex justify-content-center '>
        <div className='h-50 w-50'>
          <svg className='mainlight mx-auto d-flex'>
            <text x="50%" y="50%" dy=".35em" text-anchor="middle">
              WELCOME
            </text>
          </svg>
         
          <div className="sub">
            <div class="typewriter">
              <h1>code with &#123;Ravinder&#x7D;....</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPage
