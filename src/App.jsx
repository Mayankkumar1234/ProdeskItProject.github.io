import PrivateRoute from './PrivateRoute/Private';
import React, { useEffect } from 'react'
import Home from './Components/Home';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Details from './Components/Details';
import Create from './Components/Create';
import Edit from './Components/Edit';
import { FaArrowLeft } from "react-icons/fa";
import Register from './Components/Register';
import Login from './Components/Login';
import { useNavigate } from 'react-router-dom';



const App = () => {
  const { search, pathname} = useLocation();
  const navigate = useNavigate();


   useEffect(()=>{
      const user = localStorage.getItem("user");
      if(!user && pathname !== "/login" && pathname !== "/register"){
          navigate("/register")
      }
   },[])

  return (
    <div className='h-screen w-screen flex '>
{/*  This will only display when user search anything */}



  

      {(pathname != "/" || search.length > 0) && (
      <button onClick={()=>navigate("/")
      } className="text-blue-300 absolute left-[45%] border-zinc-900 border rounded font-medium text-2xl py-1 px-4 mt-[2%]">
     <FaArrowLeft />
      </button>
    
      )}
       
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} /> 
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create/>} />
        <Route path="/details/:id" element={<Details/>} />
        <Route path="/edit/:id" element={<Edit/>} />
      </Routes>
    </div>
  );
};


export default App;
