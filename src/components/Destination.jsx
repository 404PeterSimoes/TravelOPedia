import { useState } from 'react';
import {
  useDeleteDestinationMutation,
  useUpdateDestinationMutation,
} from '../api/destinationApi';

function Destination({ destination }) {
  const [deleteDestination] = useDeleteDestinationMutation();
  const [updateDestination] = useUpdateDestinationMutation();

  const [isUpdating, setIsUpdating] = useState(false);
  const [newCity, setNewCity] = useState('');
  const [newCountry, setNewCountry] = useState('');

  const handleEditState = () => {
    setNewCity(destination.city);
    setNewCountry(destination.country);
    setIsUpdating(true);
  };

  const handleEditEnd = () => {
    setNewCity('');
    setNewCountry('');
    setIsUpdating(false);
  };

  const handleUpdate = () => {
    let city = '',
      country = '';

    if (newCity == '') {
      city = destination.city;
    } else {
      city = newCity;
    }
    if (newCountry == '') {
      country = destination.country;
    } else {
      country = newCountry;
    }

    updateDestination({
      id: destination.id,
      city: city,
      country: country,
      daysNeeded: destination.daysNeeded,
    });

    setNewCity('');
    setNewCountry('');
    setIsUpdating(!isUpdating);
  };

  return (
    <div className="row py-1 border-top" key={destination.id}>
      <div className=" row col-6 py-2">
        <div className="col-6">
          {isUpdating ? (
            <input
              name="city"
              placeholder="City..."
              type="text"
              className="form-control"
              value={newCity}
              onChange={(e) => setNewCity(e.target.value)}
            />
          ) : (
            <span>{destination.city}</span>
          )}
        </div>
        <div className="col-6">
          {isUpdating ? (
            <input
              name="country"
              placeholder="Country..."
              type="text"
              className="form-control"
              value={newCountry}
              onChange={(e) => setNewCountry(e.target.value)}
            />
          ) : (
            <span>{destination.country}</span>
          )}
        </div>
      </div>
      <div className="col-2 text-info py-2">{destination.daysNeeded} days</div>
      <div className="col-4">
        {isUpdating && (
          <span>
            <button
              className="btn m-1 btn-warning"
              onClick={() => handleEditEnd()}
            >
              Cancel
            </button>

            <button
              className="btn m-1 btn-success"
              onClick={() => handleUpdate()}
            >
              Update
            </button>
          </span>
        )}
        {!isUpdating && (
          <span>
            <button
              className="btn m-1 btn-warning"
              onClick={() => handleEditState()}
            >
              Edit
            </button>
            <button
              className="btn m-1 btn-danger"
              onClick={() => deleteDestination({ id: destination.id })}
            >
              Delete
            </button>
          </span>
        )}
      </div>
    </div>
  );
}

export default Destination;
