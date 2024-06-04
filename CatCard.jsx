import React from 'react';

const CatCard = ({ cat }) => {
  if (!cat) return null;

  return (
    <div className="cat-card">
      <img src={cat.url} alt={cat.breeds[0].name} />
      <h2>{cat.breeds[0].name}</h2>
      <p>{cat.breeds[0].description}</p>
    </div>
  );
};

export default CatCard;
