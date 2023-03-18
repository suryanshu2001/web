import React from 'react';
import { Carousel } from 'react-carousel3';

const style = {
  width: 297,
  height: 296,
};

function preview () {
    return(
  <div 
    style={{
      display: 'flex',
      justifyContent: 'center',
      background:'' /*'linear-gradient(to bottom, #100001 0%, #000001 100%)'*/,
    }}
  >
    <Carousel height={450} width={980} yOrigin={42} yRadius={48} autoPlay={true}>
      <div key={1} style={style}>
        <img alt="" src="https://silicon.ac.in/wp-content/uploads/2022/01/Image-4-1.png" />
      </div>
      <div key={2} style={style}>
        <img alt="" src="https://silicon.ac.in/wp-content/uploads/2022/01/Image-5-1.png" />
      </div>
      <div key={3} style={style}>
        <img alt="" src="https://silicon.ac.in/wp-content/uploads/2021/07/1-1-1.jpg" />
      </div>
    </Carousel>
  </div>
    )
}
export default preview