import React from 'react';
import { Grid, Paper } from '@mui/material';

const MyComponent = () => {
  return (
    <div className='flex  flex-wrap ml-8 lg:w-full pb-32 pt-10 gap-7'>
        <div className='md:w-72 shadow-2xl'>
             
            <Paper  spacing={3} style={{width:'70%', display:'flex', margin:"15px"}}>
              <img
                src={require('./Certificat/python certificat.jpg')} // Adjust the path accordingly
                alt="Certificate"
                style={{ width: '90%', height: '100%', objectFit: 'cover', margin:'10px', background:'white'}}
              /> 
            </Paper>
        </div>
        <div className='md:w-96 ml-5 mr-10  shadow-2xl'>
            <Paper  spacing={3} style={{width: '80%', display:'flex', marginLeft:"40px", marginTop:'50px'}}>
              <img
                src={require('./Certificat/JavaScript.png')} // Adjust the path accordingly
                alt="Certificate"
                style={{ width: '93%', height: '100%', objectFit: 'cover' , marginLeft:'10px'}}
              />
            </Paper>
        </div>
        <div className='md:w-96 ml-5 mr-10 md:mr-10  shadow-2xl'>
            <Paper  spacing={3} style={{width: '80%', display:'flex', marginLeft:"40px", marginTop:'30px'}}>
              <img
                src={require('./Certificat/CSS certificat.jpg')} // Adjust the path accordingly
                alt="Certificate"
                style={{ width: '93%', height: '100%', objectFit: 'cover' , marginLeft:'10px'}}
              />
            </Paper>
        </div>
    </div>
  );
};

export default MyComponent;
