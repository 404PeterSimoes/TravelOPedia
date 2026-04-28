import { useGetAllDestinationsQuery } from '../api/destinationApi';
import Destination from './Destination';

function DestinationList() {
  const { data, isLoading, isSuccess, isError, error } =
    useGetAllDestinationsQuery();

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = data.map((destination) => (
      <Destination destination={destination} key={destination.id} />
    ));
  } else if (isError) {
    content = <p>{error}</p>;
  }
  return <div>{content}</div>;
}

export default DestinationList;
