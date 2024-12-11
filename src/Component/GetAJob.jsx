import React from 'react'
import getajoblogo from '../Assets/getajoblogo.png'
import heroImage from '../Assets/heroImage.png'

const GetAJob = () => {
  return (
    <div>
      <header>
      <img src={getajoblogo} alt="Logo" />
        <nav>
          <a href="">Companies</a>
          <a href="">Candidates</a>
          <a href="">Assessment</a>
          <a href="">Post a Job</a>
          <a href="">Career Advice</a>
        </nav>
        <nav>
        <a href=''>Sign Up</a>
        <a href='' className='logIn'>Log In</a>
        </nav>
      </header>
      <section>
         <img src={heroImage} alt="Hero Image" className='heroImage'/>
         <h1>Find a <span>job</span> easily</h1>
         <p>With verified, up-to-date job listings directly from employer websites, we create a premium experience for job seekers, employers, and data seekers alike.</p>

         <input type="text" placeholder='Enter keywords, skill, interest'/>
         <input type="text" placeholder='Location'/>
      </section>
      
        
    </div>
  )
}

export default GetAJob