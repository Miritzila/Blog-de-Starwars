import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/detailCard.css";

const PeopleDetail = ({ ...targetResource }) => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <img
            src="https://i.pinimg.com/564x/35/f7/f6/35f7f67d9eb064a7b2a081dd5b496f83.jpg"
            className="cardDetailImg card-img-top object-fit-cover"
            alt="..."
          />
          <div />
        </div>
        <div className="col">
          <p className="text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend justo ac justo aliquam, at luctus urna tincidunt. Proin sit amet feugiat enim. Vivamus hendrerit eleifend justo, ac sagittis libero dignissim eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce eu lectus id velit euismod venenatis. Maecenas vehicula dapibus velit vel consequat. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed eleifend eros id libero venenatis, in lacinia sapien vulputate.
          </p>
          <br></br>
          <div className="container text-center">
            <div className="row row-cols-auto">
              <div className="col">
              </div>
              <div className="col">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item fw-bold">Birth Year</li>
                  <li className="list-group-item">{targetResource.birth_year}</li>
                </ul>
              </div>
              <div className="col">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item fw-bold">Gender</li>
                  <li className="list-group-item">{targetResource.gender}</li>
                </ul>
              </div>
              <div className="col">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item fw-bold">Height</li>
                  <li className="list-group-item">{targetResource.height}</li>
                </ul>
              </div>
              <div className="col">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item fw-bold">Eye Color</li>
                  <li className="list-group-item">{targetResource.eye_color}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="d-grid gap-2 col-6 mx-auto">
            <Link to="/">
              <br></br>
              <br></br>
              <br></br>
              <button className="btn btn-dark" type="button">Go back home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleDetail;