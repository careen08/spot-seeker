import React from "react";
import "./Login.css";
import formData from '../../Pages.json'; 
import Footer from '../../Components/Footer/Footer';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";

const Login = ({ pageId = "Login" }) => {
  const pageData = formData.pages.find(page => page.id === pageId);

  if (!pageData) {
    return <div>Page not found</div>;
  }

  
  const displayedFields = pageData.fields.filter(field => field.id === "email" || field.id === "password");
  const checkboxText = pageData.fields.find(field => field.type === "checkbox")?.checkboxText;
  const button = pageData.fields.find(field => field.type === "button");
  const text = pageData.fields.filter(field => field.id === "forgot" || field.id === "noAccount"|| field.id === "continue");

  return (
    <>
    <div className="square2">
      <div className="login-container">
        <form>
        <h1>Login</h1>
          {displayedFields.map(field => (
            <div key={field.id} className="field1">
              <label >{field.label}</label>
              <input type={field.type} id={field.id} name={field.id} />
            </div>
          ))}
          <div className="field2">
            <input type="checkbox" id="checkbox" name="checkbox" />
            <label type="check">{checkboxText}</label>
          </div>
          <a href="/landingpage" type="submit" id={button.id}>{button.buttonText}</a>
        </form>
        {text.map(field => (
          <div key={field.id} className="field3">
            <a id={field.id} href="/register">{field.text} </a>
          </div>
        ))}
        <div className="icons">
        <a><FcGoogle /> <FaApple /></a>
        </div>
      </div>
    </div>
   
    <Footer />
    </>
  );
  
  
};

export default Login;
