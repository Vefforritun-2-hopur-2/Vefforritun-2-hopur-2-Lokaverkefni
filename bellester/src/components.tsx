//setja in functions hér sem er hægt að importa
import React from 'react';
import Image from 'next/image';
import pfp from './image/pfp.svg'
import dog from './image/dog.jpg'
export function Linkbutton(props:{link:string,text:string})
{
    return <a href={props.link}>{props.text}</a>
}

export const Header = () =>{

  return (
  <header>
    <div className="headerDiv">
      <div className=''>
        <nav className="navbar bg-gray-800 text-white p-4">
          {/* Checkbox til að toggle valmyndina */}
          <input type="checkbox" id="nav-toggle" className="nav-toggle sr-only"/>
          {/* Label sem er hamborgaratáknið */}
          <label htmlFor="nav-toggle" className="navbar-toggle cursor-pointer">
            <span className="block w-6 h-px bg-white mt-1"></span>
            <span className="block w-6 h-px bg-white mt-1"></span>
            <span className="block w-6 h-px bg-white mt-1"></span>
          </label>
          {/* Dropdown valmyndin */}
          <div className="nav-menu hidden absolute top-full left-0 w-full bg-gray-800">
            <a href="/" className="block text-white px-4 py-2">Heim</a>
            <a href="/about" className="block text-white px-4 py-2">Um Okkur</a>
            <a href="/help" className="block text-white px-4 py-2">Hjálp</a>
            <a href="/contact" className="block text-white px-4 py-2">Hafa Samband</a>
          </div>
        </nav>
    </div>
    
        <a href="/"><div className="logo">bellaser</div></a>
        <a href="/login"><div className="profile-icon">
          <Image src={pfp} alt='profileIcon' height={500}></Image>
        </div></a>
    </div>
    
   
{/* 
        <div className="nav-menu hidden absolute top-full left-0 w-full bg-gray-800">
          <nav className="navBar">
            <ul>
              <li><Linkbutton link='/' text='Home'/></li>
              <li><Linkbutton link='about' text='About Us'/></li>
              <li><Linkbutton link='contact' text='Contact'/></li>
              <li><Linkbutton link='help' text='Help'/></li>
            </ul>
          </nav>
        </div> */}
  </header>
  );
};

export const About = () =>{
  return(
    <body>
      <h1>This is the about Page</h1>
    </body>
  )
}

export const Main = () => {
  return(
    <>
       <nav className="dogBar">
        <button className="nav-button"><i className="fa fa-calendar"></i> Tímapantanir</button>
        <a href="/login"><button className="nav-button">Þarf að passa? [+]</button></a>
        <button className="nav-button">Filters <i className="fa fa-th-list"></i></button>
      </nav>

      <div className="hundar">

        <div className="card">
          <Image src={dog} alt='dog' height={500}></Image>
          <div className="cardText">
              <h3>Kári (2 ára)</h3>
              <p><i className="fa fa-map-marker"></i> Mosó</p>
              <p><i className="fa fa-calendar"></i> 13/4 - 20/4</p>
              <p><i className="fa fa-money"></i> 25.000 Kr</p>
          </div>
        </div>

        <div className="card">
          <Image src={dog} alt='dog' height={500}></Image>
          <div className="cardText">
              <h3>Kári (2 ára)</h3>
              <p><i className="fa fa-map-marker"></i> Mosó</p>
              <p><i className="fa fa-calendar"></i> 13/4 - 20/4</p>
              <p><i className="fa fa-money"></i> 25.000 Kr</p>
          </div>
        </div>

        <div className="card">
          <Image src={dog} alt='dog' height={500}></Image>
          <div className="cardText">
              <h3>Kári (2 ára)</h3>
              <p><i className="fa fa-map-marker"></i> Mosó</p>
              <p><i className="fa fa-calendar"></i> 13/4 - 20/4</p>
              <p><i className="fa fa-money"></i> 25.000 Kr</p>
          </div>
        </div>

        <div className="card">
          <Image src={dog} alt='dog' height={500}></Image>
          <div className="cardText">
              <h3>Kári (2 ára)</h3>
              <p><i className="fa fa-map-marker"></i> Mosó</p>
              <p><i className="fa fa-calendar"></i> 13/4 - 20/4</p>
              <p><i className="fa fa-money"></i> 25.000 Kr</p>
          </div>
        </div>

        <div className="card">
          <Image src={dog} alt='dog' height={500}></Image>
          <div className="cardText">
              <h3>Kári (2 ára)</h3>
              <p><i className="fa fa-map-marker"></i> Mosó</p>
              <p><i className="fa fa-calendar"></i> 13/4 - 20/4</p>
              <p><i className="fa fa-money"></i> 25.000 Kr</p>
          </div>
        </div>

        <div className="card">
          <Image src={dog} alt='dog' height={500}></Image>
          <div className="cardText">
              <h3>Kári (2 ára)</h3>
              <p><i className="fa fa-map-marker"></i> Mosó</p>
              <p><i className="fa fa-calendar"></i> 13/4 - 20/4</p>
              <p><i className="fa fa-money"></i> 25.000 Kr</p>
          </div>
        </div>

      </div>
    </>
  )
}

export const Footer = () => {
  return (
    <footer>
      bellaser® | 2024
    </footer>
  );
};

export const Navbar = () => {
  return (
    //gera backround annan lit -toto
    <div className=''>
      <nav className="navbar bg-gray-800 text-white p-4">
        {/* Checkbox til að toggle valmyndina */}
        <input type="checkbox" id="nav-toggle" className="nav-toggle sr-only"/>
        {/* Label sem er hamborgaratáknið */}
        <label htmlFor="nav-toggle" className="navbar-toggle cursor-pointer">
          <span className="block w-6 h-px bg-white mt-1"></span>
          <span className="block w-6 h-px bg-white mt-1"></span>
          <span className="block w-6 h-px bg-white mt-1"></span>
        </label>
        {/* Dropdown valmyndin */}
        <div className="nav-menu hidden absolute top-full left-0 w-full bg-gray-800">
          <a href="/about" className="block text-white px-4 py-2">Um Okkur</a>
          <a href="/contact" className="block text-white px-4 py-2">Hafa Samband</a>
          <a href="/" className="block text-white px-4 py-2">Heim</a>
        </div>
      </nav>
    </div>
    
  );
};