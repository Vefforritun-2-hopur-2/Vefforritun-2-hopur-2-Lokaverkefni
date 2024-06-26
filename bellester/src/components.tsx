'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';
import pfp from './image/pfp.svg'
import { initializeApp } from "firebase/app";
import { getDatabase, get, child, ref } from "firebase/database";

//import { getStorage,ref as refs} from "firebase/storage";


// spaceRef now points to "images/space.jpg"
// imagesRef still points to "images"




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



const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

// Get a database referance to our blog
const db = getDatabase();
/*
function dogpics(){
    
  const storage = getStorage(app);
  
  // Create a child reference
  const imagesRef = refs(storage, 'images');
  // imagesRef now points to 'images'
  
  // Child references can also take paths delimited by '/'
  const spaceRef = refs(storage, 'images/kuro.jpg');
  console.log("hundapic")
  let hundar:any = document.getElementById("1")
  hundar.src = spaceRef
  console.log(hundar)
}
*/

function loginedas(){
  const usn: any = sessionStorage.getItem("loginas")
  const usert:any = document.getElementById("user")
  usert.innerHTML=usn
  console.log("account loded")
}

function dogfecher(){
  const dbRef = ref(getDatabase());
  get(child(dbRef, `dogs`)).then((snapshot) => {
  let userarr = Object.entries(snapshot.val());
  let temp:any
  console.log(userarr)
  for(let n=0;n<userarr.length;n++){






    
    temp = userarr[n][1]
    //console.log(temp)

    

    let dog1 = document.getElementById("hundar")
    
    let div1 = document.createElement("div")
    div1.className="card"
    let div2 = document.createElement("div")
    div2.className="cardText"
    let h31 = document.createElement("p")
    h31.innerText="Nafn: "+temp.dogName

    let p1 = document.createElement("p")
    let i1 = document.createElement("i")
    i1.className="fa fa-map-marker"
    i1.innerText="Staður: "+temp.stad
    p1.appendChild(i1)
    let p2 = document.createElement("p")
    let i2 = document.createElement("i")
    i2.className="fa fa-calendar"
    i2.innerText="Date: "+temp.date
    p2.appendChild(i2)
    let p3 = document.createElement("p")
    let i3 = document.createElement("i")
    i3.className="fa fa-money"
    i3.innerText="Kr: "+temp.Kr
    p3.appendChild(i3)

    let p4 = document.createElement("p")
    let i4 = document.createElement("i")
    i4.className="fa fa-money"
    i4.innerText="sími: "+temp.phone
    p4.appendChild(i4)

    const img1 = document.createElement("img") as HTMLImageElement

    img1.setAttribute("src","/dog.jpg")
    img1.setAttribute("alt","dog")
    img1.setAttribute("height","500")

    
    div2.appendChild(h31)
    div2.appendChild(p1)
    div2.appendChild(p2)
    div2.appendChild(p3)
    div2.appendChild(p4)

    div1.appendChild(img1)

    div1.appendChild(div2)





    dog1?.appendChild(div1)
    
   
  }

  })
}

export const Header = () =>{
  'use client'
  
  
  setTimeout(loginedas,105)
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
    
        <a className="logo" href="/"><div className="logo">bellaser</div></a>
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
  
  setTimeout(dogfecher,90)

  //setTimeout(dogpics,150)

  return(
    <>
       <nav className="dogBar">
        <button className="nav-button"><i className="fa fa-calendar"></i> Tímapantanir</button>
        <a href="/post"><button className="nav-button">Þarf að passa? [+]</button></a>
        <button className="nav-button">Filters <i className="fa fa-th-list"></i></button>
      </nav>

      <div className="hundar" id='hundar'>

      </div>
    </>
  )
}


export const Footer = () => {
  const toggleDropdown = () => {
    const dropdownContent:any = document.querySelector('.dropdown-content');
    if (dropdownContent.style.display === 'block') {
      dropdownContent.style.display = 'none';
    } else {
      dropdownContent.style.display = 'block';
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-800 text-white p-4 fixed bottom-0 w-full flex justify-between items-center">
      <button onClick={scrollToTop} className="scroll-to-top-button">
        ↑ Aftur efst
      </button>
      <center><div>bellaser® | 2024</div></center>
      <div className="dropdown">
        <div className="dropdown-toggle cursor-pointer" onClick={toggleDropdown}>Fleiri atriði</div>
        <div className="dropdown-content hidden">
          <a href="/login" className="block px-4 py-2">Bæta við pósti</a>
          {/* Hér getur þú bætt við fleiri valmöguleikum ef þú vilt */}
        </div>
      </div>
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

