import React from 'react'
import Navbar from './navbar';
import Page1content from './page1content';

const Section1 = (props) => {
  console.log(props.user)
  return (
    <div className='section'>
      <Navbar />
      <Page1content user={props.user} />
    </div>
  )
}

export default Section1;
