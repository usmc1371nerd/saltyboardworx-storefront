import React from "react";
import Header from "./header";
import "./home.css"
import RightSideImg from "../images/download.jpeg"
import Footer from "./footer";


function Home()  {
    return(
        <div>
            <Header/>

            <div className="home-content">

            <div className="welcome-content"> 
            
                <p>
                    
                    Welcome to Salty Board Worx, 
                where quality craftsmanship meets creativity, 
                and customer satisfaction is our top priority. 
                We're a family-driven business that crafts with 
                passion and ensures your enjoyment.
                </p>
                <div className="img"> 
           
                    <img src={RightSideImg} alt="woodworking" />
           
                </div> 
                
            </div>

         

            </div>
            <Footer/>
        </div>
    )
}


export default Home;