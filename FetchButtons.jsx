import React from 'react';

const FetchButtons = ({ fetchRandomCat, fetchCatDetails }) => {
  return (
    <div className="button-group">
      <button onClick={fetchRandomCat}>Fetch Random Cat</button>
      <button onClick={fetchCatDetails}>Fetch Cat Details</button>
    </div>
  );
};

export default FetchButtons;
