import { useGetAllDestinationsQuery } from '../api/destinationApi';

function DestinationList() {
  const { data, isLoading, isSuccess, isError, error } =
    useGetAllDestinationsQuery();

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = data.map((destination) => (
      <article key={destination.id}>
        <div className="text-center text-info p-2">
          {destination.city}, {destination.country} - {destination.daysNeeded}{' '}
          days
        </div>
      </article>
    ));
  } else if (isError) {
    content = <p>{error}</p>;
  }
  return <div>{content}</div>;
}

export default DestinationList;
