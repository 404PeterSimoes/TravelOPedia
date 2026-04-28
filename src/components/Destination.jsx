import { useDeleteDestinationMutation } from '../api/destinationApi';

function Destination({ destination }) {
  const [deleteDestination] = useDeleteDestinationMutation();

  return (
    <div className="row py-1 border-top" key={destination.id}>
      <div className="col-5 offset-1">
        {destination.city}, {destination.country}
      </div>
      <div className="col-2 text-info">{destination.daysNeeded} days</div>
      <div className="col-3">
        <button
          className="btn form-control btn-danger"
          onClick={() => deleteDestination({ id: destination.id })}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Destination;
