import React from 'react'
import myImage from './IMG20220503183941.jpg'

const Contact = () => {
  return (
    <div className='text-gray-300  w-full h-screen flex lg:text-center text-center'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8  text-center  '>
          <div className='sm:text-right pb-8  pl-4'>
             <p className='text-4xl font-bold inline border-b-4  border-pink-600'>About</p>
          </div>
          <div>
            <div className=' w-full h-2/3  rounded-xl flex justify-center sm:1/3 relative right-[-220px]'>
              <img style={{width:"330px" , height:"360px", top:"420px"}}
                className='rounded-full p-7  object-fill object-center text-center ' 
                src={myImage} alt='Azees'
              />
            </div>
          </div>

          <div className=' top-[-269px] relative  right-[-10px] w-full grid grid-cols-2 gap-8 lg:text-center lg:ml-52  sm:ml-36'>
            <div className='text-white text-2xl sm:ml-5 '>
              <p>HI, I'm Azees Rahman nice to meet you, </p>
            </div>
            <div className=''>
              <p>I am passionate about building excellent responsive web design . i specialize in creating software client side rendring responsive web site create</p>
            </div>

          </div>

        </div>
      </div>
         <div>
            {/* <ul>
              <li>
                <a href='a'></a>
                <p></p>
              </li>
            </ul> */}
            <li></li>
          </div>
    
    </div>
  )
}

export default Contact
