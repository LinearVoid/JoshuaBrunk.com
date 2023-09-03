import "./Aboutme.css"
import React from "react";
import Programlayout from "../layout/Programlayout";
import {Link} from "react-scroll"
function Aboutme(){
   return(
      
         <Programlayout url = "projects">
            <Link to = "skills" spy={true} smooth={true} offset={-50} duration={500}>
            <h1 id = "about">Who am I?</h1>
            </Link>  
            <p>const programmer = {"{"} </p>
                     <p className = 'greaterIndent'>Name : "Joshua Brunk",</p>
                     <p className = 'greaterIndent'>Status : "Hi! I am a Student at the University of Florida!",</p>
                     <p className = 'greaterIndent'>Origin : "I am from Florida",</p>
                     <p className = 'greaterIndent'>Major : "I am majoring in Computer Science",</p>
                     <p className = 'greaterIndent'>Other Interests : [ "Writing", "Game Design", "Music", "Drones"],</p>
                     <p className = 'greaterIndent'>Github : "<a rel="noreferrer" target="_blank" href="https://github.com/LunaVoid">https://github.com/LunaVoid</a>",</p>
                     <p className = 'greaterIndent'>Email : "<a  rel="noreferrer" target="_blank" type = "email" href="mailto:JoshuaBcontact22@gmail.com">JoshuaBcontact22@gmail.com</a>",</p>
                     <p className = 'greaterIndent'>LinkedIn : "<a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/joshuabrunk/">https://www.linkedin.com/in/joshuabrunk/</a>",</p>
                     <p className = 'greaterIndent'>What am I Learning? : ["React Native", "and Unity(C#)"]</p>
                     <p>{"}"} </p>
         

         </Programlayout>
      


   )
    
   
                



}

export default Aboutme;