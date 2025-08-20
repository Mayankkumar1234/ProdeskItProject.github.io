import PrivateRoute from './PrivateRoute/Private';
import React from 'react'
import Home from './Components/Home';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Details from './Components/Details';
import Create from './Components/Create';
import Edit from './Components/Edit';
import { FaArrowLeft } from "react-icons/fa";
import Register from './Components/Register';
import Login from './Components/Login';



const App = () => {
  const { search, pathname} = useLocation();

  return (
    <div className='h-screen w-screen flex '>
{/*  This will only display when user search anything */}



      {(pathname != "/" || search.length > 0) && (
      <Link to="/" className="text-blue-300 absolute left-[45%] border-zinc-900 border rounded font-medium text-2xl py-1 px-4 mt-[2%]">
     <FaArrowLeft />
      </Link>
    
      )}
       
      <Routes>
        {/* <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />  */}
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create/>} />
        <Route path="/details/:id" element={<Details/>} />
        <Route path="/edit/:id" element={<Edit/>} />
      </Routes>
    </div>
  );
};


export default App;
