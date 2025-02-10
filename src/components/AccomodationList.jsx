import { Link } from "react-router-dom";

function AccomodationList(props) {
  return (
    <section className="TravelList">
      {props.Appartments.map((appartment) => {
        let hostLabel = "";
        if (appartment.host_is_superhost) {
          hostLabel = "Super Host";
        }

        return (
          
          <div className="travel-card" key={appartment.id}>
            
          <img src={appartment.picture_url} alt={appartment.name} className="travel-image" />
            <div className="travel-details">
              <p className="destination">{appartment.name}</p>
              <p className="destination">{appartment.host_location}</p>
              <p className="price">{appartment.price ? `Price: ${appartment.price} €` : null}</p>
              <p className="labels">
                {hostLabel && <span className="label">{hostLabel}</span>}
              </p>
              <button onClick={() => props.handleDelete(appartment.id)} className="delete-btn">Delete</button>
              <Link to={`/${appartment.id}`}>
                <button className="details-btn">More details</button>
              </Link>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default AccomodationList;