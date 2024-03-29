import React from "react";
const PeopleCard = ({ birth_year, name, eye_color }) => {
  return (
    <>
        <h5 className="card-title">{name}</h5>
      <img
        src="https://i.pinimg.com/564x/df/7a/a0/df7aa0ae9b66e2ab2d0ee0df21d180f9.jpg"
        className="card-img  img-fluid w-100 h-100 rounded"
        alt="..."
      />
      <p>
        <strong>Birth year: </strong>
        {birth_year}
      </p>
      <p>
        <strong>Eye color: </strong>
        {eye_color}
      </p>
    </>
  );
};

export default PeopleCard;