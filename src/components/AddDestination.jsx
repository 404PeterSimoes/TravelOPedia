import { useState } from 'react';

function AddDestination() {
  const [newCity, setNewCity] = useState('');
  const [newCountry, setNewCountry] = useState('');

  const handleAddDestination = (formData) => {
    const city = formData.get('city');
    const country = formData.get('country');

    console.log(`City: ${city}, Country: ${country}`);

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
