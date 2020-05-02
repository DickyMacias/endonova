import React from 'react';
import background from './images/banner.jpg'
import Carousel from './components/Carousel';


function Home() {

    return (
    <div>
      <div style={{backgroundImage: `url(${background})`, minHeight: '100vh'}}/>

      {/* <Carousel/>  */}
    </div>
    );
}

export default Home;
