import AddDestination from './AddDestination';
import DestinationList from './DestinationList';
import RandomDestination from './RandomDestination';

function DestinationIndex() {
  return (
    <div className="py-4">
      <h1 className="text-success text-center">Travel List</h1>
      <AddDestination />
      <br />
      <div className="text-center h3 text-warning">Destination List</div>
      <DestinationList />
      <br />
      <RandomDestination />
    </div>
  );
}

export default DestinationIndex;
