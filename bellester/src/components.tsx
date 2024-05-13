//setja in functions hér sem er hægt að importa
'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';
import pfp from './image/pfp.svg'
import dog from './image/dog.jpg'
import logo from './image/BellaserLogo.png'

const firebaseConfig = {
  apiKey: "AIzaSyBBRbx5fVL51TTYp-RjaDvaYT9k5UaBo20",
authDomain: "bellaser-73dd8.firebaseapp.com",
databaseURL: "https://bellaser-73dd8-default-rtdb.europe-west1.firebasedatabase.app",
projectId: "bellaser-73dd8",
storageBucket: "bellaser-73dd8.appspot.com",
messagingSenderId: "986734973667",
appId: "1:986734973667:web:878f3bbdf4772ea2f3abd6"
};



export function Linkbutton(props:{link:string,text:string})
{
  return <a href={props.link}>{props.text}</a>
}
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, child } from "firebase/database";
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

// Get a database referance to our blog
const db = getDatabase();


export const Header = () =>{
  'use client'
  
  function loginedas(){
    const usn: any = sessionStorage.getItem("loginas")
    const usert:any = document.getElementById("user")
    usert.innerHTML=usn
    console.log("account loded")
  }
  setTimeout(loginedas,1000)
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
    
        <a className="logo" href="/"><div className="logo">bellaser <Image src={logo} alt='logoBellaser' height={500}></Image></div></a>
        <div>
          <a href="/login">
            <div className="profile-icon">
              <Image src={pfp} alt='profileIcon' height={500}></Image>
            </div>
          </a>
          
          <p id="user"></p>
        </div>
    </div>
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
  function cardmaker(){

  }
  
  function dogfecher(){
    const dbRef = ref(getDatabase());
    get(child(dbRef, `dogs`)).then((snapshot) => {
    let userarr = Object.entries(snapshot.val());
    let temp:any
    for(let n=0;n<userarr.length;n++){
      temp = userarr[n][1]
      console.log(temp)
      let dog = document.getElementById("hundar")
      let div1 = document.createElement("div")
      div1.className="card"
      let div2 = document.createElement("div")
      let h31 = document.createElement("h3")
      h31.innerText=temp.dogname

      let p1 = document.createElement("p")
      let i1 = document.createElement("i")
      i1.className="fa fa-map-marker"
      i1.innerText=temp.dogname
      p1.appendChild(i1)
      let p2 = document.createElement("p")
      let i2 = document.createElement("i")
      i2.className="fa fa-calendar"
      i1.innerText=temp.date
      p2.appendChild(i2)
      let p3 = document.createElement("p")
      let i3 = document.createElement("i")
      i3.className="fa fa-money"
      i1.innerText=temp.kr
      p3.appendChild(i3)

      div2.appendChild(h31)
      div2.appendChild(p1)
      div2.appendChild(p2)
      div2.appendChild(p3)

      div1.appendChild(div2)





      dog?.appendChild(div1)
    }
    })
  }
  
  setTimeout(dogfecher,1000)
  return(
    <>
       <nav className="dogBar">
        <button className="nav-button"><i className="fa fa-calendar"></i> Tímapantanir</button>
        <a href="/post"><button className="nav-button">Þarf að passa? [+]</button></a>
        <button className="nav-button">Filters <i className="fa fa-th-list"></i></button>
      </nav>

      <div className="hundar" id='hundar'>

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

