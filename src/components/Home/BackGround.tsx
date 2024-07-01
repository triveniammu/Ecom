import React, { FC } from 'react';
import './stylesheet.css';

export default function BackGround({ isVideo, isImage, src, para, heading, link, buttontext }) {
  return (
    <div className='content-section'>
      {isVideo ? 
        <video className='background-video' autoPlay loop muted
          src={src} />
      : isImage ? 
        <img className='background-image' src={src} alt="Background" />
       : null}
      <div className='text'>
        <p>{para}</p>
        <h1><b>{heading}</b></h1>
        <a href={link} className='button' role='button'><b>{buttontext}</b></a>
      </div>
    </div>
  );
};