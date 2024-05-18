import React from "react";
import formData from '../../Pages.json'; 
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { IoSearchOutline } from "react-icons/io5";
import './LandingPage.css';




const LandingPage = ({ pageId = "LandingPage" }) => {
    const pageData = formData.pages.find(page => page.id === pageId);
    const displayedFields = pageData.fields;

    if (!pageData) {
      return <div>Page not found</div>;
    }
    return (
        <>
        <Header></Header>
        <div className="wrap">
          <div className="landing-container">
            <form>
            <h1>{pageData.title}</h1>
         
            <input id="search" type="search" placeholder={pageData.searchbar} ></input>
            
            <div className="gallery">
              {displayedFields.map(field => (
                 <div key={field.id} className="gallery-item">
                    <a target="_blank" href='/#'>
                      <img src={field.imgUrl} alt={field.label} />
                      <label className="label-bottom-left">{field.label}</label>
                     </a>
                  </div>
                   ))}
              </div>
            </form>
         </div>
        </div> 
        <Footer></Footer>
        </>
            );
}
export default LandingPage;