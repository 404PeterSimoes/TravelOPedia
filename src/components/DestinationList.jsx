import {
  useDeleteDestinationMutation,
  useGetAllDestinationsQuery,
} from '../api/destinationApi';

function DestinationList() {
  const { data, isLoading, isSuccess, isError, error } =
    useGetAllDestinationsQuery();

  const [deleteDestination] = useDeleteDestinationMutation();

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = data.map((destination) => (
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
    ));
  } else if (isError) {
    content = <p>{error}</p>;
  }
  return <div>{content}</div>;
}

export default DestinationList;
