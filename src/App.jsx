import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AccomodationsData from "../data/listings.json"
import Homepage from './components/Homepage';
import AccomodationList from './components/AccomodationList';
import AccomodationDetails from './components/AccomodationDetails';
import './css/Homepage.css'; // Layout CSS
import './css/AccomodationDetails.css'; // Accommodation list CSS
import './css/AccomodationList.css'; // Accommodation details CSS

function App() {
  const [Properties, setProperties] = useState(AccomodationsData.results);

  const DeleteProperties = (id) => {
    const updatedAppartments = Properties.filter((appartment) => appartment.id !== id);
    setProperties(updatedAppartments); // Update state with the filtered array
  };

  return (
    <>
    <Homepage>
      <Routes>
        <Route path="/" element={<AccomodationList Appartments={Properties} handleDelete={DeleteProperties} />} />
        <Route path="/:appartmentId" element={<AccomodationDetails Appartments={Properties} />} />
      </Routes>
    </Homepage>
    </>
  );
}

export default App;
