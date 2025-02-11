import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AccomodationsData from "../data/listings.json"
import Homepage from './components/Homepage';
import AccomodationList from './components/AccomodationList';
import AccomodationDetails from './components/AccomodationDetails';
import AddAccomodation from './components/AddAccomodation';
import About from './components/About';
import NotFoundPage from './components/NotFoundPage';
import './css/Homepage.css'; 
import './css/AccomodationDetails.css'; 
import './css/AccomodationList.css'; 
import './css/AddAccomodation.css'
import './css/About.css'

function App() {
  const [Properties, setProperties] = useState(AccomodationsData.results);

  const DeleteProperties = (id) => {
    const updatedAppartments = Properties.filter((appartment) => appartment.id !== id);
    setProperties(updatedAppartments); // Update state with the filtered array
  };
  const createProperty = (propDetails) => {

    const propIds = Properties.map((property) => property.id);
    const maxId = Math.max(...propIds);
    const nextId = maxId + 1;

    const newProperty = {
      ...propDetails,
      id: nextId
    }

    const newList = [newProperty, ...Properties];

    setProperties(newList);
  }

  return (
    <>
    <Homepage>
      <Routes>
      
        <Route path="/" element={<AccomodationList Appartments={Properties} handleDelete={DeleteProperties} />} />
        <Route path="/:appartmentId" element={<AccomodationDetails Appartments={Properties} />} />
        <Route path="/Add" element={<AddAccomodation callbackToCreate={createProperty} />} />
        <Route path="/About" element={<About />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </Homepage>
    </>
  );
}

export default App;

