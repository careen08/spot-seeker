import React from "react";
import formData from '../../Pages.json'; 
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import './Aboutus.css'

const Aboutus = ({ pageId = "AboutUs" }) => {
    const pageData = formData.pages.find(page => page.id === pageId);

    if (!pageData) {
      return <div>Page not found</div>;
    }
    return (
        <>
        <Header></Header>
        <div className="content2">
          <div className="about-container">
            <form>
            <h1>About <span style={{ color: '#BDDE80' }}>Us!</span></h1>
              {pageData.fields.map(field => (
                <div key={field.id} className="form-field5">
                  <h4>{field.title}</h4>
                  <p>{field.text}</p>
                </div>
                 ))}
           

            </form>
         </div>
        </div> 
        <Footer></Footer>
        </>
            );
}
export default Aboutus;