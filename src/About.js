import React from 'react'
import Header from './Header'
import './About.css'
const About = () => {
  return (
    <div>
         <Header name="About"/>
         <div className="about">
              {/* <div className="divs"> */}
                  <div className="leftdiv1 left">
                    <p>Personal Info</p>
                  </div>
                  <div className="rightdiv1 right">
                     
                   <ul>
                    <li>Jagadish</li>
                    <li>8790823739</li>
                    <li>jagadishapj@gmail.com</li>
                    <li>Cyber Security</li>
                   </ul>

                  </div>
              {/* </div> */}
              {/* <div className="divs" > */}
                  <div className="leftdiv2 left">
                  <p>Education</p>
                  </div>
                  <div className="rightdiv2 right">
                   <ul>
                    <li>SSC</li><p>I completed my schooling from Srujana School, vishakapatnam</p>
                    <li>InterMediate</li><p>I completed my intermediate form Sri Chaitanya Junior College - P.M.Palem, vishakapatnam</p>
                    <li>Bachelor Of Technology</li><p>Present I am persuing B.Tech 2nd year , Cyber Security from Raghu INdtitute OF  Technology Dakamarri, Vizianagaram</p>
                   </ul>

                  </div>
              {/* </div> */}
              <div className="leftdiv3 left">
                  <p>Skills</p>
                  </div>
                  <div className="rightdiv3 right">
                   <ul>
                    <li>C language</li>
                    <div className="skilldivs">
                        <div id="c">70%</div>
                    </div>

                    <li>ReactJs</li>
                    <div className="skilldivs">
                        <div id="react">20%</div>
                    </div >

                    <li>Web Designing</li>
                    <div className="skilldivs">
                        <div id="web">50%</div>
                    </div>
                    <li>Microsoft Excel</li>
                    <div className="skilldivs">
                        <div id="ms">70%</div>
                    </div>
                    <li>Python</li>
                    <div className='skilldivs'>
                        <div id='python'>60%</div>
                    </div>
                    <li>Time Management</li>
                    <div className="skilldivs">
                        <div id="time"> 100%</div>
                    </div>

                   </ul>

                  </div>


              <div className="leftdiv4 left">
                    <p>Certifications</p>
                  </div>
                  <div className="rightdiv4 right">
                     
                   <ul>
                    <li>Jagadish</li>
                    <li>8790823739</li>
                    <li>jagadishapj@gmail.com</li>
                    <li>Cyber Security</li>
                    <li>Jagadish</li>
                    <li>8790823739</li>
                    <li>jagadishapj@gmail.com</li>
                    <li>Cyber Security</li>
                   </ul>

                  </div>
                  <br></br>         <br></br>         <br></br>
         </div>
        
    </div>
  )
}

export default About
