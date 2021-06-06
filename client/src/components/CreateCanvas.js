import React from 'react';
import Options from './Options';
import MyCanvas from './MyCanvas';

export default function CreateCanvas() {
  return (
    <div className='cratecanvas'>
      <Options />
      <MyCanvas />
      <p className='footer'>Enjoy editing your own image and text!!!</p>
    </div>
  );
}
