import Programlayout from "../layout/Programlayout";
import "./Projects.css"
import Card from "./Card.js"
import bot from "./bot.PNG"
import perlin from "./perlin.png"
import {Link} from "react-scroll"
function Projects(){
    return(
        
        <Programlayout>
            <Link to = "flex-buttons" spy={true} smooth={true} offset={-50} duration={500}>
            <h1 id = "projects" >Projects</h1>
            </Link>
            <div className = "flexarrange">
            
                <Card  alt = "Image of Waving Robot, my Logo"name= "JoshuaBrunk.com" photo = {bot} phrase = "Check out the Github Repo for this site by clicking here!" url= "https://github.com/LinearVoid/JoshuaBrunk.com " />
                <Card alt = "binary search image" name= "Simple Pyinary Search" photo = "https://s3-us-west-2.amazonaws.com/ib-assessment-tests/problem_images/binary_search.gif" phrase = "A simple Python Script I created while trying to understand the CORDIC algorithm" url= "https://github.com/LinearVoid/SimplePyinarySearch" />
                <Card alt = "image of perlin noise" name= "Perlin Noise Generator" photo = {perlin} phrase = "A simple program that generates 2D perlin noise using Unity" url= "https://linearvoid.itch.io/perlin-noise-viewer-test" />
                <Card alt = "Image of a Red Cube" name= "Bobby the Cube's Bizzare Adventures" photo = "https://img.itch.zone/aW1nLzQzNTQ4MDAucG5n/original/RJGTzp.png" phrase = "My first Unity Program that is just a simple Cube moving and his name is Bobby" url= "https://linearvoid.itch.io/bobby-the-cubes-bizzare-adventures" />
                <Card  alt = "Image of the Word PERN" name= "PERN Stack Program" photo = "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200402205611/What-is-PERN-Stack.png" phrase = "I created this program to learn Postgressql, Node and Express. I used EJS instead of react and will be rewriting this soon" url= "https://linearvoid.itch.io/perlin-noise-viewer-test" />
                <Card alt = "Image of an astronaut in space" name= "Astronaut Wandering" photo = "" phrase = "This Unity Game was a test of gravity. It has an astronaut floating in space and astroids with gravity." url= "https://linearvoid.itch.io/wandering-astronaut" />
                </div>
            
            <div id = "button-holder">
            <Link id = "flex-buttons" to = "/" spy={true} smooth={true} offset={-50} duration={500}>
           To the Top</Link>
            </div>
         
        </Programlayout>
        

    )



}
 
export default Projects;