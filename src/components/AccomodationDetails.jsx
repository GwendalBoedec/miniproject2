import { Link, useParams } from "react-router-dom";


function AccomodationDetails (props) {
    const { AppartmentId } = useParams();

    const appartment = props.Appartments.find((appartment) => {
        return appartment.id === parseInt(AppartmentId);
    });

    return (
        <div className='MovieDetails card'>

            {appartment.picture_url && <img src={appartment.picture_url} alt="Appartment Picture" />}

            <h2>{appartment.name}</h2>
            <h3>{appartment.host_location}</h3>
            <p>Host name: {appartment.host_name}</p>
            <p>Rating: {appartment.review_scores_rating}</p>
            <p>Description: {appartment.description}</p>

            <p>
                <Link to="/" className="btn btn-primary">Back</Link>
            </p>

        </div>
    );
}

export default AccomodationDetails

