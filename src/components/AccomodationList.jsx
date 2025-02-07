
import './AccomodationList.css';
import { Link, useParams } from "react-router-dom";


function AccomodationList(props) {
  
  const { appartmentId } = useParams();
  // Function to handle delete
  const handleDelete = (id) => {
    // Filter out the travel plan with the matching id
    const updatedAppartments = props.Appartments.filter((appartment) => appartment.id !== id);
    setAppartment(updatedAppartments); // Update state with the filtered array
  };
  return (
    <section className="TravelList">
      {props.Appartments.map((appartment) => {
        // Determine the labels based on totalCost and allInclusive
        let hostLabel = "";
        let price 
        if (appartment.host_is_superhost) {
          hostLabel = "Super Host";
        }
        

        // All Inclusive check
        // const allInclusiveLabel = travel.allInclusive ? "All Inclusive" : "";
        //{allInclusiveLabel && <span className="label">{allInclusiveLabel}</span>}

        return (
          <div className="travel-card" key={appartment.id}>
            <img src={appartment.picture_url} alt={appartment.name} className="travel-image" />
            <div className="travel-details">
              <p className="destination">{appartment.name}</p>
              <p className="destination">{appartment.host_location}</p>
              <p className="price"> {appartment.price ? `Price: ${appartment.price} €` : null}</p>
              <p className="labels">
                
                {hostLabel && <span className="label">{hostLabel}</span>}
                
              </p>
              
              <button 
                onClick={() => handleDelete(appartment.id)} 
                className="delete-btn"
              >
                Delete
              </button>
              <Link to={`/${appartment.id}`}>
                    <button className="btn btn-primary">More details</button>
                </Link>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default AccomodationList;
