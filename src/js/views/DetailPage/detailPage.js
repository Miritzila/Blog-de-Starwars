import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import PeopleDetail from "./PeopleDetail";
import PlanetsDetail from "./PlanetsDetail.js";
import StarshipsDetail from "./starshipDetail";
import useAppContext from "../../../context/AppContext";

export const DetailPage = () => {
  const params = useParams();
  const { store } = useAppContext();
  const { people, planets, vehicles, isLoading } = store;

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  const allResources = [...people, ...planets, ...vehicles];
  const targetResource = allResources.find((items) => items.uid == params.uid);

  if (!targetResource) {
    return <div>Error: Recurso no encontrado</div>;
  }

  let resourceType;
  if (people.find((person) => person.uid == params.uid)) {
    resourceType = "people";
  } else if (planets.find((planet) => planet.uid == params.uid)) {
    resourceType = "planets";
  } else {
    resourceType = "starships";
  }

  return (
    <div>
      <h2 className="p-2 text-center">{targetResource.name}</h2>
      <br></br>
      {resourceType === "people" && (
        <PeopleDetail {...targetResource} />
      )}
      {resourceType === "starships" && (
        <StarshipsDetail {...targetResource} />
      )}
      {resourceType === "planets" && (
        <PlanetsDetail {...targetResource} />
      )}
    </div>
    
  );
};