import React from "react";
import formData from '../../Pages.json'; 
import './Home.css'
import Footer from '../../Components/Footer/Footer';



const Home = ({ pageId = "Home" }) => {
    const pageData = formData.pages.find(page => page.id === pageId);
  
    if (!pageData) {
      return <div>Page not found</div>;
    }
    return (
        <>
        <div className="main">
            
            <video src={`${process.env.PUBLIC_URL}/Image/homevideo.mp4`}  autoPlay loop muted/>
        </div>
        <div className="home_containor">
            <h1>{pageData.title}</h1>
            <a href="/login">{pageData.button}</a>
        </div>
        <Footer></Footer>
        </>

    );
}

export default Home ;
