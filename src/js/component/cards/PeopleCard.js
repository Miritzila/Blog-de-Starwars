import React from "react";
const PeopleCard = ({ gender, birth_year, name }) => {
  return (
    <>
        <h5 className="card-title">{name}</h5>
      <img
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/39faf444-0f54-48e8-9200-ce675c273feb/df8mqha-fed14fca-7a20-40e7-b4e0-dc0a8933d2f8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM5ZmFmNDQ0LTBmNTQtNDhlOC05MjAwLWNlNjc1YzI3M2ZlYlwvZGY4bXFoYS1mZWQxNGZjYS03YTIwLTQwZTctYjRlMC1kYzBhODkzM2QyZjgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.5YGBZR8oLI4Te59AbOPQzlQJICi7mUxMzyOiPpUjwhc"
        className="card-img  img-fluid w-100 h-100 rounded"
        alt="..."
      />
      <p>
        <strong>Gender: </strong>
        {gender}
      </p>
      <p>
        <strong>Birth year:</strong>
        {birth_year}
      </p>
    </>
  );
};

export default PeopleCard;