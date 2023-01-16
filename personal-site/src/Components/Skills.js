import "./Skills.css"
import Programlayout from "../layout/Programlayout";
import {Link} from "react-scroll"
function Skills(){
    return(
      <Link to = "projects" spy={true} smooth={true} offset={-50} duration={500}>
      <Programlayout>
        
        
        <h1 id = "skills">Programming Skills</h1>
        <ul className = "list">
            <li>React Web Development: I have experience creating several React Web Apps and Pages. This includes experience with the React Router, React Smooth Scroll, React Layouts and Props. I also have limited experience with useState and several other React Function. </li>

            <li>FullStack Development: After Learning React, I learned how to create the Backend for a simple CRUD app using the PERN Stack. This means that I am able to create a Webapp that can access a database and Create, Read, Update and Delete the data that is within. The database that I used for this project was Postgresql. </li>
            
            <li>Node.js and Express: I have experience using Express Middleware and it's routers to create a Webapplication that can pull from Rest Apis and send other Https requests.  </li>

            <li>I have experience using Unity to create basic 3D environments, basic character controllers and desktop applications. I also have experience using Unity to create simple mobile apps using Unity's mobile input system. </li>

            <li>I completed the original Free Code Camp Responsive Web Design Certification. This means that I have experience using HTML and CSS to create Responsive layouts. This includes methods such as Flexbox, Grid layouts and media queries to create a responsive page.</li>

            <li>Knowledge of the Python Programming Language. I can create programs in Python to accomplish a variety of tasks. I have basic knowledge of the Tkinter library as well for Gui creation.</li>

        </ul>

        <h1>Other Skills</h1>

        <ul className = "list">
            <li>Commercial Drone Operator Licensed under FAA Part 107</li>
            <li>Computer Technician: I am proficient in assembling and setting up computers with multiple operating systems and configurations. I have built several desktop computers from scratch for friends, family and customers.</li>
            <li>Basic Videography and Photography Editing: I can create professional presentations using video editing softwares like Davinci Resolve, and use Adobe Lightroom to modify photos to be more presentable.</li>
        </ul>
        
      </Programlayout>
      </Link>
    )
 
 
 }
 
 export default Skills;