// import React from 'react'
// import { Education1 } from './data'

// const Education = () => {
//   return (
//     <div>
//       {Education1.map(() => (
//           <div className='text-black bg-white w-screen h-full shadow-md p-10'>
//             <h1 className='text-3xl font-semibold font-mono text-teal-600'>
//               Education Details :
//             </h1>
//             <div className='w-2/4 flex mt-5  shadow-2xl'>
//               <div className=' relative mb-20'key={Education1.id}>
//                 <h2>{Education1.college}</h2>
//                 <div className='flex-wrap absolute ml-3'>
//                   <ul className=''>
//                     <li className=''>
//                       <h2>:</h2>
//                       <p>:</p>
//                     </li>
//                     <li className=''>
//                       <p></p>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//          </div>  
//       ))}
      
//     </div>
    
//   )
// }

// export default Education
import React from 'react';

const Education = () => {
  const Education1 = [
    {
      id: 0,
      college: "PSG College of Technology",
      Degree: "BE - Electrical and Electronics Engineering(Sandwich)",
      percentage: "72%",
      Year: "2017 - 2021",
      place: "Coimbatore",
      state: "Tamil Nadu",
    },
    {
      id: 1,
      college: "Al-Ameen Polytechnic College",
      Degree: "Diploma - Electronics and Communication Engineering",
      percentage: "75%",
      Year: "2015 - 2017",
      place: "Erode",
      state: "Tamil Nadu",
    },
    {
      id: 2,
      college: "Higher Study",
      Degree: "Government Higher Sec School",
      percentage: " 81%",
      Year: "2015 - 2017",
      place: "Erode",
      state: "Tamil Nadu",
    },
  ];

  return (
    <div className="text-white items-center bg-black w-screen h-full shadow-md p-5 md:p-10 md:m-auto md:relative  ">
      <h1 className="text-3xl font-semibold font-mono text-teal-600">Education Details:</h1>
      <div className=" w-full md:w-2/4 flex flex-wrap mt-5  gap-10 shadow-2xl md:ml-56 relative lg:left-[180px] md:left-[100px]  ">
        {Education1.map((education) => (
          <div className="w-full md:w-1/2 lg:w-1/2  xl:w-1/3 relative mb-5 md:mb-10  " key={education.id}>
            <h2 className="text-xl md:text-2xl font-semibold">{education.college}</h2>
            <ul className="mt-2 md:mt-5">
              <li>
                <h3 className="text-teal-600">Degree:</h3>
                <p>{education.Degree}</p>
              </li>
              <li>
                <h3 className="text-teal-600">Percentage:</h3>
                <p>{education.percentage}</p>
              </li>
              <li>
                <h3 className="text-teal-600">Year:</h3>
                <p>{education.Year}</p>
              </li>
              <li>
                <h3 className="text-teal-600">Place:</h3>
                <p>{education.place}</p>
              </li>
              <li>
                <h3 className="text-teal-600">State:</h3>
                <p>{education.state}</p>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;

