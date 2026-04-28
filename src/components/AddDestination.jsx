import { useState } from 'react';
import {
  useAddDestinationMutation,
  useGetAllDestinationsQuery,
} from '../api/destinationApi';

function AddDestination() {
  const [newCity, setNewCity] = useState('');
  const [newCountry, setNewCountry] = useState('');

  const [addDestinationMutation, resultObj] = useAddDestinationMutation();

  const { data: destinations } = useGetAllDestinationsQuery();

  const handleAddDestination = (formData) => {
    const city = formData.get('city');
    const country = formData.get('country');

    console.log(`City: ${city}, Country: ${country}`);

    const getNextId = () => {
      if (!destinations || destinations.length === 0) {
        return 1;
      }
      const maxId = Math.max(...destinations.map((dest) => dest.id));
      return maxId + 1;
    };

    addDestinationMutation({
      id: getNextId().toString(),
      city: newCity,
      country: newCountry,
      daysNeeded: parseInt(Math.random() * 10) + 1,
    });

    // Reset form fields
    setNewCity('');
    setNewCountry('');
  };

  return (
    <div className="py-4 border">
      <form action={handleAddDestination}>
        <div className="row col-10 offset-1">
          <h4>Enter a new Destination</h4>
          <div className="col-5 p-1">
            <input
              name="city"
              placeholder="Enter city..."
              type="text"
              className="form-control"
              value={newCity}
              onChange={(e) => setNewCity(e.target.value)}
            />
          </div>
          <div className="col-5 p-1">
            <input
              name="country"
              placeholder="Enter country..."
              type="text"
              className="form-control"
              value={newCountry}
              onChange={(e) => setNewCountry(e.target.value)}
            />
          </div>
          <div className="col-2 p-1">
            <button className="btn btn-success form-control">Add</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddDestination;
