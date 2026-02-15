import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppLayout from './layouts/AppLayout';
import AuthLayout from './layouts/AuthLayout';
import RegistrationLayout from './layouts/RegistrationLayout';
import Eggs from "./components/childcomponents/Eggs"
import Shop from "./components/childcomponents/Shop"
import Tools from "./components/childcomponents/Tools"
import Meat from "./components/childcomponents/Meat"
import Login from "./components/childcomponents/Login"
import Registration from "./components/childcomponents/Registration"
import {BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {


  return (

   <Routes>
    
      <Route element={<AuthLayout/>}>
       <Route path="/login" element={<Login />} />
     </Route>

       <Route element={<RegistrationLayout/>}>
       <Route path="/register" element={<Registration />} />
       </Route>

     <Route element={<AppLayout/>}>
     
        <Route path="" element={<Shop/>}>
        </Route>
        <Route path="/tools" element={<Tools/>}>
        </Route>
        <Route path="/eggs" element={<Eggs/>}>
        </Route>
        <Route path="/meat" element={<Meat/>}>
        </Route>
     </Route>
   </Routes>

  )
  
}


export default App
