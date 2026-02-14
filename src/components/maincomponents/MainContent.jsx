
import Eggs from "../childcomponents/Eggs"
import Shop from "../childcomponents/Shop"
import Tools from "../childcomponents/Tools"
import Meat from "../childcomponents/Meat"

import { BrowserRouter, Route, Routes } from "react-router-dom"

export default function MainContent(){

    return (
      
            <Routes>
                <Route path="/shop" element={<Shop/>}></Route>
                <Route path="/tools" element={<Tools/>}></Route>
                <Route path="/eggs" element={<Eggs/>}></Route>
                <Route path="/meat" element={<Meat/>}></Route>
            </Routes>

       
    )



}