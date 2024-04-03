import {Link} from 'react-router-dom'
import img1 from './images/jaga.jpeg'
import React from 'react'
import Header from './Header'
import './Home.css'
const Home = () => {
  return (
    <div >  
       <Header/>
        <div className="home">
            <img src={img1} align="right" /> 
            <h1>I am Jagadish Potela</h1>
            <div className="paras">
            <p1>I'm a Cyber Security Student at RIT Dakamarri. My roll number is 223J1A4648. I come from a supportive family. My father, Potela Anand, is a carpenter, and my mother, Anasuya Potela, is a homemaker.  My long-term goal is to become a Navy Officer. </p1>
            </div>

           <Link to="/about"> <button>About Me</button></Link>
            <Link to="/projects"><button>Projects</button></Link>
        </div>


    </div>
  )
}

export default Home