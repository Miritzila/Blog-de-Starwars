import React from "react";
import PlanetsCard from "./PlanetsCard";
import PeopleCard from "./PeopleCard.js";
import StarshipsCard from "./StarshipCard";
import { Link } from "react-router-dom";
import useAppContext from "../../../context/AppContext";
import "../../../styles/cardStyle.css"


const Card = ({ uid, targetResource, ...item }) => {
  const {
    store: { favorites },
    actions: { addToFavorites, removeFromFavorites },
  } = useAppContext();
  const isFavorite = Boolean(
    favorites?.some((items) => items.name === item.name)
  );

  return (
    <div className="card" style={{ minWidth: "18rem" }}>
      <div className="card-body">
        <div>
          {targetResource === "people" && <PeopleCard {...item} />}
          {targetResource === "planets" && <PlanetsCard {...item} />}
          {targetResource === "vehicles" && <StarshipsCard {...item} />}
        </div>
        <div className="d-flex justify-content-between">
          <button className="btn btn-dark"><Link to={`/${uid}`} className="btn btn-dark">
            Learn More about {item.name}
          </Link></button>
          <div className="d-flex justify-content-center align-items-center">
            <div
              className={`btn ms-auto ${isFavorite ? "favorite-button-active" : "favorite-button-inactive"}`}
              onClick={
                isFavorite
                  ? () => removeFromFavorites(uid, item.name)
                  : () => addToFavorites(uid, item.name)
              }
            >
              {isFavorite ? <i className="fa-solid fa-heart fa-xl"></i> : <i className="fa-regular fa-heart fa-xl"></i>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;