import React from 'react'
import {MailOutline,LinkedIn ,GitHub } from '@mui/icons-material/';
import { Link } from '@mui/material';
import myImage from './IMG20230226205542.jpg'
import Skils from './Skils';
import Education from './Education';
import Project from './Project';
// import Contact from './Contact';



const Home = () => {
  const linkedInLink = 'https://www.linkedin.com/in/azees-rahman-5741ab209'; // Replace with your LinkedIn profile URL
  const mailLink = 'azeesbindeen1997@gamil.com'; // Replace with your email address
  const gitHubLink = 'https://github.com/Azees2023/Azees2023'; // Replace with your GitHub profile URL

  return (
    <div className='bg-black w-full h-full sticky flex flex-wrap first-letter:capitalize justify-center text-center text-white -z-50'>
      <div>
        <h2 className='text-4xl py-2 text-cyan-500'>Hi, My Name is Azees </h2>
        <div>
          <p className='text-xl  bold'>A Softtware Developer with a passion for learning and creating.</p>
          <div className='text-3xl flex  justify-center gap-16 py-5 text-gray-600 cursor-pointer'>
          <Link to='https://www.linkedin.com/in/azees-rahman-5741ab209'  target="_blank" rel="noopener noreferrer">
              <LinkedIn />
            </Link>
            <Link href={mailLink} target="_blank" rel="noopener noreferrer">
              <MailOutline />
            </Link>
            <Link href={gitHubLink} target="_blank" rel="noopener noreferrer">
              <GitHub />
            </Link>
          
          </div>
          
        </div>

        <div className=' w-full h-2/3 rounded-xl  flex justify-center sm:1/3 relative'>
            <img style={{width:"355px" , height:"350px", top:"420px"}}
              className='rounded-full   object-fill object-center text-center bg-gradient-to-r p-[2px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]' 
              src={myImage} alt='Azees'
            />
        </div>
      </div>
      <Skils  />
      <Education /> 
     {/* <Contact /> */}
     <Project />
    </div>
  )
}

export default Home
