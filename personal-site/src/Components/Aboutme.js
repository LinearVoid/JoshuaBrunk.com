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
                     <p className = 'greaterIndent'>Origin : "I am from Citrus County, Florida",</p>
                     <p className = 'greaterIndent'>Major : "I am majoring in Computer Science",</p>
                     <p className = 'greaterIndent'>Interests : ["I am interested in Programming", "Writing", "Game Design", "Music", "and Drones"],</p>
                     <p className = 'greaterIndent'>Resume : "<a rel="noreferrer" target="_blank" href="https://docs.google.com/document/d/e/2PACX-1vQ9Z-C0s1E8O-tQPdZpt2HItgv0P_u2XjyBhIqAhhsahek28I8Pl_R-5U-z7u-jlw/pub">JoshuaBrunkResume.pdf</a>",</p>
                     <p className = 'greaterIndent'>Github : "<a rel="noreferrer" target="_blank" href="https://github.com/LinearVoid">https://github.com/LinearVoid</a>",</p>
                     <p className = 'greaterIndent'>Email : "<a  rel="noreferrer" target="_blank" type = "email" href="mailto:JoshuaBcontact22@gmail.com">JoshuaBcontact22@gmail.com</a>",</p>
                     <p className = 'greaterIndent'>LinkedIn : "<a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/linearvoid/">https://www.linkedin.com/in/linearvoid/</a>",</p>
                     <p className = 'greaterIndent'>What am I Learning? : ["React/React Native", "FullStack with NodeJS"", "and Unity(C#)"]</p>
                     <p>{"}"} </p>
         

         </Programlayout>
      


   )
    
   
                



}

export default Aboutme;