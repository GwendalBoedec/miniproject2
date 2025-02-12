import { Link, useParams } from "react-router-dom";
import NotFoundPage from './NotFoundPage';

// Link to the new CSS file

function AccomodationDetails(props) {
  const { appartmentId } = useParams();
  const appartment = props.Appartments.find((appartment) => appartment.id === parseInt(appartmentId));

  if (!appartment) {
    return <NotFoundPage />;
  }
  return (
    <div className="accommodation-card">
      <h2>Accommodation details for {appartment.name}</h2>
      <img src={appartment.picture_url} alt="Apartment Picture" className="accommodation-image" />
      <div className="accommodation-details">
        <h2 className="accommodation-name">{appartment.name}</h2>
        <h3 className="accommodation-location">{appartment.host_location}</h3>
        <p className="accommodation-host">Host name: {appartment.host_name}</p>
        <p className="accommodation-rating">Rating: {appartment.review_scores_rating}</p>
        <p className="accommodation-description">Description: {appartment.description}</p>
        <p>
          <Link to="/" className="accommodation-back-button">Back</Link>
        </p>
        <p>
          <Link to={`/${appartmentId}/edit`} className="accommodation-back-button">Edit Accommodation</Link>
        </p>
      </div>
    </div>
  );
}

export default AccomodationDetails;

