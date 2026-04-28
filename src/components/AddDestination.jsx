function AddDestination() {
  return (
    <div className="py-4 border">
      <form>
        <div className="row col-10 offset-1">
          <h4>Enter a new Destination</h4>
          <div className="col-5 p-1">
            <input
              placeholder="Enter city..."
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-5 p-1">
            <input
              placeholder="Enter counter..."
              type="text"
              className="form-control"
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
