import "./Skills.css"
import Programlayout from "../layout/Programlayout";
import {Link} from "react-scroll"
function Skills(){
    return(
      <Link to = "projects" spy={true} smooth={true} offset={-50} duration={500}>
      <Programlayout>
        
        
        <h1 id = "skills">Programming Skills</h1>
        <ul className = "list">
            <li>React Web Development</li>

            <li>Node.js and Express</li>

            <li>Basic Unity</li>

            <li>Responsive Web Design</li>

            <li>Python</li>

        </ul>

        <h1>Non-Programming Skills</h1>

        <ul className = "list">
            <li>Commercial Drone Operator Licensed under FAA Part 107</li>
            <li>Computer Technician (Building and maintaining computers)</li>
            <li>Basic Videography and Photography Editing</li>
        </ul>
        
      </Programlayout>
      </Link>
    )
 
 
 }
 
 export default Skills;