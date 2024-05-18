import React from "react";
import formData from '../../Pages.json'; 
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import './Contactus.css'

const Contactus = ({ pageId = "Contactus" }) => {
    const pageData = formData.pages.find(page => page.id === pageId);
    const displayedFields = pageData.fields.filter(field => field.id === "name" || field.id === "email"|| field.id === "message");
    const buttonText = pageData.fields.find(field => field.type === "button")?.buttonText;

    if (!pageData) {
      return <div>Page not found</div>;
    }
    return (
        <>
        <Header></Header>
        <div className="content">
          <div className="contact-container">
            <form>
            <h1>Lets Get in <span style={{ color: '#BDDE80' }}>Touch!</span></h1>
            <h4>{pageData.subtitle}</h4>
              {displayedFields.map(field => (
                <div key={field.id} className="form-field4">
                  <label>{field.label}</label>
                  <input type={field.type} id={field.id} name={field.id} />
                </div>
                 ))}
                  {buttonText && <button type="submit">{buttonText}</button>}

            </form>
         </div>
        </div> 
        <Footer></Footer>
        </>
            );
}
export default Contactus;