import React from 'react'
import Image from 'react-bootstrap/Image'


const Home=()=>{
    return (
        <div id="home">
            <div id="home">
            <Image src="./pictures/home.png" className="responsiveH" fluid />
            </div>
            <br></br>
            <h1 id="homeText"> Call us today </h1>
            <a href="tel:7164272060" className="contact">(716) 427-2060</a>
            
            <img src="./pictures/bloom2.gif" className="bloom"></img>
            <br></br>
            <h1 id="homeText"> At Crowley Landscaping, We Strive for Perfection, and Quality Work is the Most Important Aspect of our Business. </h1>
            <br></br>
            <h1 id="homeText"> Making Our Customers Happy Makes Us Happy!</h1>
            
            <div id="home">
            <Image src="./pictures/grass.png" className="line" fluid />
            </div>
        </div>
    )

}

export default Home