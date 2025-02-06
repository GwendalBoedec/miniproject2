import AccomodationsData from "../../data/listings.json";
import { useState } from "react";
import './AccomodationList.css';

function AccomodationList() {
  const [Appartments, setAppartment] = useState(AccomodationsData.results);

  // Function to handle delete
  const handleDelete = (id) => {
    // Filter out the travel plan with the matching id
    const updatedAppartments = Appartments.filter((appartment) => appartment.id !== id);
    setAppartment(updatedAppartments); // Update state with the filtered array
  };
  return (
    <section className="TravelList">
      {Appartments.map((appartment) => {
        // Determine the labels based on totalCost and allInclusive
        let hostLabel = "";
        if (appartment.host_is_superhost === 'false') {
          hostLabel = "";
        } else if (appartment.host_is_superhost === 'true') {
          hostLabel = "Super Host";
        }

        // All Inclusive check
        // const allInclusiveLabel = travel.allInclusive ? "All Inclusive" : "";
        //{allInclusiveLabel && <span className="label">{allInclusiveLabel}</span>}

        return (
          <div className="travel-card" key={appartment.id}>
            <img src={appartment.picture_url} alt={appartment.name} className="travel-image" />
            <div className="travel-details">
              <p className="destination">{appartment.host_location}</p>
              <p className="description">{appartment.description}</p>
              <p className="price">Price: {appartment.price} €</p>
              <p className="labels">
                
                {hostLabel && <span className="label">{hostLabel}</span>}
                
              </p>
              
              <button 
                onClick={() => handleDelete(appartment.id)} 
                className="delete-btn"
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default AccomodationList;
