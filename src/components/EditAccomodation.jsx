import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import NotFoundPage from './NotFoundPage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditAccommodation(props) {
  const { appartmentId } = useParams();
  const appartment = props.Appartments.find((appartment) => appartment.id === parseInt(appartmentId));
  const navigate = useNavigate();

  // Initialize state with the existing apartment details
  const [name, setName] = useState(appartment ? appartment.name : "");
  const [host_location, setHostLocation] = useState(appartment ? appartment.host_location : "");
  const [host_name, setHostName] = useState(appartment ? appartment.host_name : "");
  const [description, setDescription] = useState(appartment ? appartment.description : "");
  const [review_scores_rating, setRating] = useState(appartment ? appartment.review_scores_rating : "");
  const [picture_url, setPictureUrl] = useState(appartment ? appartment.picture_url : "");
  const [host_is_superhost, setHostIsSuperhost] = useState(appartment ? appartment.host_is_superhost : false);
  const [price, setPrice] = useState(appartment ? appartment.price : "");

  // Form validation function
  const formIsValid = () => {
    return name !== "" && review_scores_rating !== "";
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission and page reload

    // Check if the form is valid
    if (formIsValid()) {
      // Create the updated property object
      const updatedApartment = {
        id: appartment.id,
        name,
        host_location,
        host_name,
        description,
        review_scores_rating,
        picture_url,
        host_is_superhost,
        price: `$${parseFloat(price).toFixed(2)}`
      };

      // Call the callback function from props to update the apartment in the parent component
      props.callbackToUpdate(updatedApartment);

      // Show success toast
      toast("Accommodation details updated successfully!");

      // Redirect to the details page after 2 seconds
      setTimeout(() => {
        navigate(`/${appartment.id}`);
      }, 2000);
    } else {
      // Show a warning toast if the form is not valid
      toast("Please fill in all required fields!");
    }
  };

  if (!appartment) {
    return <NotFoundPage />;
  }

  return (
    <section className="AddAccommodation box">
      <h1>Edit the Accommodation Details</h1>
      <form onSubmit={handleSubmit}>
        
        {/* Name input (required) */}
        <label>
          Title of the announce: 
          <input
            type="text"
            name="name"
            placeholder="Enter the name of the property"
            value={name}
            onChange={(e) => setName(e.target.value)}  // Update state for name
          />
        </label>

        {/* Host location input (optional) */}
        <label>
          Host Location:
          <input
            type="text"
            name="host_location"
            placeholder="Enter the location of the host"
            value={host_location}
            onChange={(e) => setHostLocation(e.target.value)}  // Update state for host location
          />
        </label>

        {/* Host name input (optional) */}
        <label>
          Host Name:
          <input
            type="text"
            name="host_name"
            placeholder="Enter the host's name"
            value={host_name}
            onChange={(e) => setHostName(e.target.value)}  // Update state for host name
          />
        </label>

        {/* Description input (optional) */}
        <label>
          Description:
          <textarea
            name="description"
            placeholder="Enter a description of the property"
            value={description}
            onChange={(e) => setDescription(e.target.value)}  // Update state for description
          />
        </label>

        {/* Rating input (required) */}
        <label>
          Rating: 
          <input
            type="number"
            name="rating"
            min={1}
            max={5}
            step="0.01"
            value={review_scores_rating}
            onChange={(e) => setRating(e.target.value)}  // Update state for rating
          />
        </label>

        {/* Picture URL input (optional) */}
        <label>
          Picture URL:
          <input
            type="text"
            name="picture_url"
            placeholder="Enter the URL of the property image"
            value={picture_url}
            onChange={(e) => setPictureUrl(e.target.value)}  // Update state for picture_url
          />
        </label>

        {/* Price input (optional) */}
        <label>
          Price:
          <input
            type="number"
            name="price"
            placeholder="Enter the price of the property"
            value={`${price}`}
            onChange={(e) => setPrice(e.target.value)}  // Update state for price
          />
        </label>

        {/* Superhost input (optional, boolean) */}
        <label className="checkbox-label">
          Host is Superhost: 
          <input
            type="checkbox"
            name="host_is_superhost"
            checked={host_is_superhost}
            onChange={(e) => setHostIsSuperhost(e.target.checked)}  // Update state for superhost status
          />
        </label>

        <div className="grid place-items-center h-dvh bg-zinc-900/15">
          <button type="submit">Save Changes</button>
          <ToastContainer position="bottom-right" autoClose={2000} />
        </div>
      </form>
    </section>
  );
}

export default EditAccommodation;
