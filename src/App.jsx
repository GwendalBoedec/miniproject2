import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from "./components/Homepage"
import AccomodationList from './components/AccomodationList'
import AccomodationDetails from './components/AccomodationDetails';
import AccomodationsData from "../data/listings.json";


function App() {
  const [Appartments, setAppartment] = useState(AccomodationsData.results);
   console.log(Appartments)
  return (
    <>
    <Homepage/>
    <Routes>
       
       <Route path="/" element= {<AccomodationList Appartments={Appartments} />}/>
       <Route path="/:appartmentId" element={<AccomodationDetails Appartments={Appartments} />}/>
    </Routes>     
    </>
  )
}


export default App
