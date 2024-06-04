import React from 'react';

const CatTable = ({ cat }) => {
  if (!cat || !cat.breeds ) {
    return <div>.</div>;
  }

  

  return (
    <div>
      <h2>Cat Details</h2>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{breed.name}</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>{breed.description}</td>
          </tr>
          <tr>
            <td>Temperament</td>
            <td>{breed.temperament}</td>
          </tr>
          <tr>
            <td>Origin</td>
            <td>{breed.origin}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CatTable;
