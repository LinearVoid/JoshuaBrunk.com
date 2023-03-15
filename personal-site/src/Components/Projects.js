import Programlayout from "../layout/Programlayout";
import "./Projects.css"
import Card from "./Card.js"
import bot from "./bot.PNG"
import perlin from "./perlin.png"
import clock from "./clock.webp"
import {Link} from "react-scroll"
function Projects(){
    return(
        
        <Programlayout>
            <Link to = "flex-buttons" spy={true} smooth={true} offset={-50} duration={500}>
            <h1 id = "projects" >Projects</h1>
            </Link>
            <div className = "flexarrange">
           
                <Card  alt = "Image of Waving Robot, my Logo"name= "JoshuaBrunk.com" photo = {bot} phrase = "Check out the Github Repo for this site by clicking here!" url= "https://github.com/LinearVoid/JoshuaBrunk.com " />
                <Card  alt = "Meme Generator"name= "Meme generator" photo = "https://orig00.deviantart.net/c96c/f/2011/288/8/c/troll_face_sad_by_rober_raik-d4cwjk7.png" phrase = "A simple meme generator I created" url= "https://linearvoid.github.io/Meme-generator/ " />
                <Card alt = "Image of a clock" name= "Neomorphism Timer" photo = {clock} phrase = "A Simple Timer made in REACT" url = "https://linearvoid.github.io/CoolReactTimer/" />
                <Card alt = "binary search image" name= "Simple Pyinary Search" photo = "https://s3-us-west-2.amazonaws.com/ib-assessment-tests/problem_images/binary_search.gif" phrase = "A simple Python Script I created while trying to understand the CORDIC algorithm" url= "https://github.com/LinearVoid/SimplePyinarySearch" />
                <Card alt = "image of perlin noise" name= "Perlin Noise Generator" photo = {perlin} phrase = "A simple program that generates 2D perlin noise using Unity" url= "https://linearvoid.itch.io/perlin-noise-viewer-test" />
                
                </div>
            
            <div id = "button-holder">
            <Link id = "flex-buttons" to = "/" spy={true} smooth={true} offset={-50} duration={500}>
           To the Top</Link>
            </div>
         
        </Programlayout>
        

    )



}
 
export default Projects;