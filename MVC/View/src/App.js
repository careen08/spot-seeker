
import Contactus from './Components/Contactus/Contactus';
import Aboutus from './Components/Aboutus/Aboutus';
import Login from './Components/Login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './Components/Register/Register2';
import LandingPage from './Components/LandingPage/LandingPage';
import Home from './Components/Home/Home';
import Explore from './Components/Explore/Explore';
import React, { useState, useEffect } from "react";


function App() {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/text")
      .then((res) => res.json())
      .then((data) => setText(data.text));
  }, []);

  return (
    <React.StrictMode>
      <div className='App'>
        {
          <BrowserRouter>
           <h1>{text}</h1>
          <Routes>
            <Route >
            <Route path="/" element={<Home />} />
              <Route path='/register'  element={<Register />} />
              <Route path="/aboutus" element={<Aboutus />} />
              <Route path="/contactus" element={<Contactus />} />
              <Route path="/login" element={<Login />} />
              <Route path="/landingpage" element={<LandingPage />} />
              <Route path="/explore" element={<Explore/>}/>
         
              
              
            </Route>
          </Routes>
        </BrowserRouter>
        

        
       

        }
        
    
     
  

      </div>

    </React.StrictMode>
      
 
  );
}

export default App;
