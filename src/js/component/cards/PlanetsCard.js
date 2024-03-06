import React from "react";

const PlanetsCard = ({ climate, terrain, name }) => {
  return (
    <>
      <h5 className="card-title">{name}</h5>
      <img
        src="https://i.pinimg.com/564x/46/6f/d5/466fd566e169076ce288fb9397c398ff.jpg"
        className="card-img img-fluid w-150 h-150 rounded"
        alt="..."
      />

      <p>
        <strong>Terrain: </strong>
        {terrain}
      </p>
      <p>
        <strong>Climate: </strong>
        {climate}
      </p>
    </>
  );
};

export default PlanetsCard;
