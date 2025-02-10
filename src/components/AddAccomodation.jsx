import { useState } from "react";

function AddAccomodation(props) {
    // Initialize state for each property that we may use
    const [name, setName] = useState("");  // required
    const [host_location, setHostLocation] = useState("");  // Optional
    const [host_name, setHostName] = useState("");  // Optional
    const [description, setDescription] = useState("");  // Optional
    const [review_scores_rating, setRating] = useState("");  // Rating is required
    const [picture_url, setPictureUrl] = useState("");  // Optional

    const handleSubmit = (event) => {
        event.preventDefault();

        // Create the object to send to the parent component
        const propObj = {
            name: name,
            host_location: host_location,
            host_name: host_name,
            description: description,
            review_scores_rating: review_scores_rating,
            picture_url: picture_url // Optional property
        };

        // Call the parent function to add the property
        props.callbackToCreate(propObj);

        // Clear the form fields after submitting
        setName("");
        setHostLocation("");
        setHostName("");
        setDescription("");
        setRating("");
        setPictureUrl(""); // Clear picture_url field
    };

    return (
        <section className="AddMovie box">
            <h1>Please Add the Accommodation Details</h1>
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
                        max={10}
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

                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default AddAccomodation;
