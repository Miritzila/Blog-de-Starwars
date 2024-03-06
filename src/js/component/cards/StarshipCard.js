import React from "react";

const StarshipsCard = ({ vehicle_class, manufacturer, name }) => {
  return (
    <>
      <h5 className="card-title">{name}</h5>
      <img
        src="https://i.pinimg.com/564x/a2/6d/41/a26d41e31085a261a1b2906b09e11c8d.jpg"
        className="card-img img-fluid w-150 h-150 rounded"
        alt="..."
      />
      <p>
        <strong>Vehicle class: </strong>
        {vehicle_class}
      </p>
      <p>
        <strong>Manufacturer: </strong>
        {manufacturer}
      </p>
    </>
  );
};

export default StarshipsCard;
