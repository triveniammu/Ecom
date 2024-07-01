
import React, { useState } from 'react';
import './stylesheet.css';
import BackGround from './BackGround';


const HomePage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const [data, setState] = useState([
    {
      src: 'https://sxcontent9668.azureedge.us/cms-assets/assets/Starlink_G9_2_Theater_Horiz_8410_Desktop_dfed4f1932.jpg',
      isVideo: undefined,
      isImage: true,
      para: 'RECENT LAUNCH',
      heading: 'STARLINK MISSION',
      link: undefined,
      buttontext: 'REWATCH',
    },
    {
      src: 'https://sxcontent9668.azureedge.us/cms-assets/assets/SES_24_Astra_1_P_pad39a_DSC_8165_desktop_8755a96a57.jpg',
      isVideo: undefined,
      isImage: true,
      para: 'RECENT LAUNCH',
      heading: 'ASTRA 1P MISSION',
      link: undefined,
      buttontext: 'REWATCH',
    },
    {
      src: 'https://sxcontent9668.azureedge.us/cms-assets/assets/Star10_2_062324_DSC_8189_desktop_1b8a44b38f.jpg',
      isVideo: undefined,
      isImage: true,
      para: 'RECENT LAUNCH',
      heading: 'STARLINK MISSION',
      link: undefined,
      buttontext: 'REWATCH',
    },
    {
      src: 'https://sxcontent9668.azureedge.us/cms-assets/assets/Flight_4_Drone_Website_1080_P_8b7a57a59a.mp4',
      isVideo: true,
      isImage: undefined,
      para: undefined,
      heading: 'STARSHIPS FOURTH FLIGHT TEST',
      link: undefined,
      buttontext: 'LEARN MORE',
    },
    {
      src: 'https://sxcontent9668.azureedge.us/cms-assets/assets/Eva_Suit_Desktop_alternate_1cf9bae18e.jpg',
      isVideo: undefined,
      isImage: true,
      para: undefined,
      heading: 'ADVANCING HUMAN SPACEFLIGHT',
      link: undefined,
      buttontext: 'REWATCH',
    },
    {
      src: 'https://sxcontent9668.azureedge.us/cms-assets/assets/make_life_multiplanetary_desktop_3fa7cff73c.jpg',
      isVideo: undefined,
      isImage: true,
      para: undefined,
      heading: 'TO MAKE LIFE MULTIPLANETARY',
      link: undefined,
      buttontext: 'REWATCH',
    },
  ]);

  return (
    <div className="home-page">
      <nav className="navbar">
        <div className="logo">
          <a href="/" aria-label="SpaceX Homepage">
            <svg
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 400 50"
              aria-hidden="true"
            >
              <title>SpaceX Logo</title>
              <g className="letter_s">
                <path
                  className="fill-white"
                  d="M37.5,30.5H10.9v-6.6h34.3c-0.9-2.8-3.8-5.4-8.9-5.4H11.4c-5.7,0-9,2.1-9,6.7v4.9c0,4,3.4,6.3,8.4,6.3h26.9v7H1.5
                  c0.9,3.8,3.8,5.8,9,5.8h27.1c5.7,0,8.5-2.2,8.5-6.9v-4.9C46.1,33.1,42.8,30.8,37.5,30.5z"
                ></path>
              </g>
              <g className="letter_p">
                <path
                  className="fill-white"
                  d="M91.8,18.6H59v30.7h9.3V37.5h24.2c6.7,0,10.4-2.3,10.4-7.7v-3.4C102.8,21.4,98.6,18.6,91.8,18.6z M94.8,28.4
                  c0,2.2-0.4,3.4-4,3.4H68.3l0.1-8h22c4,0,4.5,1.2,4.5,3.3V28.4z"
                ></path>
              </g>
              <g className="letter_a">
                <polygon
                  className="fill-white"
                  points="129.9,17.3 124.3,24.2 133.8,37.3 114,37.3 109.1,42.5 137.7,42.5 142.6,49.3 153.6,49.3 	"
                ></polygon>
              </g>
              <g className="letter_c">
                <path
                  className="fill-white"
                  d="M171.4,23.9h34.8c-0.9-3.6-4.4-5.4-9.4-5.4h-26c-4.5,0-8.8,1.8-8.8,6.7v17.2c0,4.9,4.3,6.7,8.8,6.7h26.3
                  c6,0,8.1-1.7,9.1-5.8h-34.8V23.9z"
                ></path>
              </g>
              <g className="letter_e">
                <polygon
                  className="fill-white"
                  points="228.3,43.5 228.3,34.1 247,34.1 247,28.9 218.9,28.9 218.9,49.3 260.4,49.3 260.4,43.5 	"
                ></polygon>
                <rect
                  className="fill-white"
                  x="219.9"
                  y="18.6"
                  width="41.9"
                  height="5.4"
                ></rect>
              </g>
              <g className="letter_x">
                <path
                  className="fill-white"
                  d="M287.6,18.6H273l17.2,12.6c2.5-1.7,5.4-3.5,8-5L287.6,18.6z"
                ></path>
                <path
                  className="fill-white"
                  d="M308.8,34.3c-2.5,1.7-5,3.6-7.4,5.4l13,9.5h14.7L308.8,34.3z"
                ></path>
              </g>
              <g className="letter_swoosh">
                <path
                  className="fill-white"
                  d="M399,0.7c-80,4.6-117,38.8-125.3,46.9l-1.7,1.6h14.8C326.8,9.1,384.3,2,399,0.7L399,0.7z"
                ></path>
              </g>
            </svg>
          </a>
        </div>

        <ul className="nav-links">
          <li>
            <a href="https://www.spacex.com/vehicles/falcon-9/">FALCON 9</a>
          </li>
          <li>
            <a href="https://www.spacex.com/vehicles/falcon-heavy/">FALCON HEAVY</a>
          </li>
          <li>
            <a href="https://www.spacex.com/vehicles/dragon/">DRAGON</a>
          </li>
          <li>
            <a href="https://www.spacex.com/vehicles/starship/">STARSHIP</a>
          </li>
          <li>
            <a href="https://www.spacex.com/humanspaceflight/">HUMAN SPACEFLIGHT</a>
          </li>
          <li>
            <a href="https://www.spacex.com/rideshare/">RIDESHARE</a>
          </li>
          <li>
            <a href="https://www.spacex.com/starshield/">STARSHIELD</a>
          </li>
          <li>
            <a href="https://www.starlink.com/">STARLINK</a>
          </li>
          <li>
            <a href='/'>SHOP</a>
          </li>
        </ul>
      </nav>
      <button className={`hamburger ${isOpen ? 'hidden' : ''}`} onClick={toggleSidebar}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={toggleSidebar}>
          X
        </button>
          <ul className="sidebar-links">
          <li>
            <a href="https://www.spacex.com/vehicles/falcon-9/">MISSIONS</a>
          </li>
          <li>
            <a href="https://www.spacex.com/vehicles/falcon-heavy/">LAUNCHES</a>
          </li>
          <li>
            <a href="https://www.spacex.com/vehicles/dragon/">CAREERS</a>
          </li>
          <li>
            <a href="https://www.spacex.com/vehicles/starship/">UPDATES</a>
          </li>
          <li>
            <a href="https://www.spacex.com/humanspaceflight/">SHOP</a>
          </li>
        </ul>
      </div>
      
      {isOpen && (<div className="overlay" onClick={toggleSidebar}></div>)}

      {data.map((item, index) => (
        <BackGround
          key={index}
          src={item.src}
          isVideo={item.isVideo}
          isImage={item.isImage}
          para={item.para}
          heading={item.heading}
          link={item.link}
          buttontext={item.buttontext}
        />
      ))}
    </div>
  );
};

export default HomePage;