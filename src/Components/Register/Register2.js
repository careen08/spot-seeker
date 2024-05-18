import React from 'react';
import formData from '../../Pages.json'; 
import Footer from '../../Components/Footer/Footer'; 
import "./Register.css"; 

const Register = ({ pageId = "Register" }) => {

  const pageData = formData.pages.find(page => page.id === pageId);

  if (!pageData) {
    return <div>Page not found</div>;
  }

  return (
    <>
      <div className="square">
        <div className="register-container">
          <h1>Create an Account</h1>
          <p>Already have an account? <a href="/login">Sign In</a></p>
        
          <form className="register-form">
            {pageData.fields.map(field => (
             
              field.type !== 'button' && (
                <div key={field.id} className="form-field">
                  <label >{field.label}</label> 
                  <input type={field.type} id={field.id} name={field.id} />
                </div>
              )
            ))}
            
            <p>Use 8 or more characters with a mix of letters, numbers & symbols</p>
            
            <div className="button-container">
             <a href="/login">
              <button type="button">
                {pageData.fields.find(field => field.type === 'button').buttonText}
              </button>
             </a>
            </div>

          </form>
        </div>
      </div>
      <Footer />
    </>  
  );
};

export default Register;
