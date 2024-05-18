
import Contactus from './Components/Contactus/Contactus';
import Aboutus from './Components/Aboutus/Aboutus';
import Login from './Components/Login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './Components/Register/Register2';
import LandingPage from './Components/LandingPage/LandingPage';
import Home from './Components/Home/Home';
import React  from 'react';


function App() {

  return (
    <React.StrictMode>
      <div className='App'>
        {
          <BrowserRouter>
          <Routes>
            <Route >
            <Route path="/" element={<Home />} />
              <Route path='/register'  element={<Register />} />
              <Route path="/aboutus" element={<Aboutus />} />
              <Route path="/contactus" element={<Contactus />} />
              <Route path="/login" element={<Login />} />
              <Route path="/landingpage" element={<LandingPage />} />
         
              
              
            </Route>
          </Routes>
        </BrowserRouter>

        
       

        }
        
    
     
  

      </div>

    </React.StrictMode>
      
 
  );
}

export default App;
