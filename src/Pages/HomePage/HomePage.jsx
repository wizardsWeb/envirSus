import React from 'react';
import CanvasContainer from '../../models/CanvasContainer';
import Section2 from './Section2';
import Section3 from './Section3';
import Section5 from './Section5';
import Section4 from './Section4';
import Section6 from './Section6';

function HomePage() {
  return (
    <div className='h-full '>
     <div className='h-full w-full fixed ' >
      <CanvasContainer />
     </div>
     
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <Section6 />
    </div>

  );
}

export default HomePage;
