import React , {useState} from "react";
import Footer from '../Footer/Footer';
import "./Register.css";
import { Component } from "react";
import { AiOutlineCopyright } from "react-icons/ai";

export const Register =()=> {   
    const [email,setEmail] = useState('');
    const[pass,setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }    

    
      return (
        <>
        
        <div className="register-container"> 
            <h1>Create an Account</h1>
            <p>Already have an acount?<a href="#">Sign In</a></p>
            <form className="register-form" onSubmit={handleSubmit} > 
                <div className="namelabel" >
                    <label htmlFor="name">First name</label>
                    <label htmlFor="lastname">Last name</label>
                </div>    
                <div className="nameinput" >
                    <input  name="name" id="name" />
                    <input  name="lastname" id="lastname" />
                </div>

                <div className="email1"> 
                    <label htmlFor="email">Email Address</label>
                    <input value={email} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
                </div>
              

                <div className="password">
                    <label htmlFor="password">Password</label>
                    <label htmlFor="password">Confirm your Password</label>
                </div>

                <div className="password">
                    <input  type="password"  id="password" name="password"/>
                    <input  type="password"  id="password" name="confirmpassword"/>
                </div>
                    
                <p>Use 8 or more characters with a mix of letters, numbers & symbols</p>
                <div class="button-container">
                    <button type="submit">Create an Account</button>
                </div>
                
            </form>
            
        </div>
        <Footer />
        </>    



        
 


        
    );
}


export default Register;
import React , {useState} from "react";
import "./Login.css";
import { Component } from "react";
import { AiOutlineCopyright } from "react-icons/ai";
import Footer from '../../Components/Footer/Footer';


export const Login =()=> {       

      return (
        <>
            <h1>Log in</h1>
            <form  >
            <label htmlfor="email">Email Adress</label>
            <input  type="email" placeholder="youremail@gamail.com" id="email" name="email"/>
            <label  htmlfor="email">Password</label>
            <input  type="password" placeholder="*******" id="password" name="password"/>
            <label><input type="checkbox"/>Remember me</label>
            <nav><a href="#">Forgot your passwod?</a></nav>
            <button type="submit">Log in</button>
            
        </form>
            <p>Don't have an acount?<a href="#">Register</a></p>
            <Footer></Footer>
        </>


        
    );
}


export default Login;

//css

.register-container .email1 {
    display: flex;
    flex-direction: column;
    margin: 30px 10px;
}

.register-container .email1 label {
    
    font-size: 14px;
    text-align: left;
    margin-bottom: 5px; 
}
.register-container .email1 input {
    
    width: 364px;
    height: 30px;
    background: transparent;
    border: 1px solid #000000;
    border-radius: 7px;
    

}
#email::placeholder {
    color: rgb(19, 17, 17); /* Change placeholder text color */
    font-size: 10px;
    padding-left: 7px;
}

.register-container .password {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 3px ; 
}

.register-container .password label {
    font-size: 14px;
    display: inline-block;
    margin-right: 133px;
    margin-left:10px ;
    
}



.register-container .password input {
    width: 150px;
    height: 30px;
    margin-left:10px ;
    margin-bottom: 5px;
    margin-right: 50px;
    margin-top: 10px;
    background: transparent;
    border: 1px solid #000000;
    border-radius: 7px;
}


.register-container .form-field {
    display: flex;
    align-items: flex-start; 
    margin-top: 30px ; 
}

.register-container .form-field label {
    font-size: 14px;
    margin-bottom: 5px;
    margin-right: 130px;
    margin-left:10px ;
}

.register-container .form-field {
    display: flex;
    align-items: flex-start; /* Align labels to the left */
    margin: 10px 10px; /* Adjust margin as needed */
}

.register-container .form-field input {
    width: 150px;
    height: 30px;
    margin-bottom: 5px;
    margin-right: 63px;
    background: transparent;
    border: 1px solid #000000;
    border-radius: 7px;
}