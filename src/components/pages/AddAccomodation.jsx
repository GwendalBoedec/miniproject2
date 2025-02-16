import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddAccommodation(props) {
    // Initialize state for each property that we may use
    const [name, setName] = useState("");  // required
    const [host_location, setHostLocation] = useState("");  // Optional
    const [host_name, setHostName] = useState("");  // Optional
    const [description, setDescription] = useState("");  // Optional
    const [review_scores_rating, setRating] = useState("");  // Rating is required
    const [picture_url, setPictureUrl] = useState("");  // Optional
    const [host_is_superhost, setHostIsSuperhost] = useState(false);  // Optional, boolean
    const [price, setPrice] = useState("");  // Optional, number

    const navigate = useNavigate();

    // Form validation function
    const formIsValid = () => {
        return name !== "" && review_scores_rating !== "";
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent form submission and page reload

        // Check if the form is valid
        if (formIsValid()) {
            // Create the object to send to the parent component
            const propObj = {
                name,
                host_location,
                host_name,
                description,
                review_scores_rating,
                picture_url,
                host_is_superhost,
                price
            };

            // Call the parent function to add the property
            props.callbackToCreate(propObj);

            // Show success toast
            toast("Accommodation added successfully!");

            // Clear the form fields after submitting
            setName("");
            setHostLocation("");
            setHostName("");
            setDescription("");
            setRating("");
            setPictureUrl(""); 
            setHostIsSuperhost(false); 
            setPrice(""); 

            // Redirect to home page after 2 seconds
            setTimeout(() => {
                navigate("/");
            }, 2000);
        } else {
            // Show a warning toast if the form is not valid
            toast("Please fill in all required fields!");
        }
    };

    return (
        <section className="AddAccommodation-box">
            <h1>Please add accommodation details</h1>
            <form onSubmit={handleSubmit}>

                {/* Name input (required) */}
                <label>
                    Name: <span style={{ color: "red" }}>*</span>
                    <input
                        type="text"
                        name="name"
                        required
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
                    Rating: <span style={{ color: "red" }}>*</span>
                    <input
                        type="number"
                        name="rating"
                        min={1}
                        max={5}
                        step="0.01"
                        required
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
                        value={price}
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
                    <button type="submit">Add Accommodation</button>
                    <ToastContainer position="bottom-right" autoClose={2000} />
                </div>
            </form>
        </section>
    );
}

export default AddAccommodation;
