import React from "react";
import Button from "react-bootstrap/Button";

function Categories(props) {
  return (
    <div>
      <h3 className="category_display">Search by category</h3>
      <nav>
        <Button variant="primary" onClick={props.fetchCategoryAction}>
          Action
        </Button>{" "}
        <Button variant="primary" onClick={props.fetchCategoryAdventure}>
          Adventure
        </Button>{" "}
        <Button variant="primary" onClick={props.fetchCategoryCars}>
          Cars
        </Button>{" "}
        <Button variant="primary" onClick={props.fetchCategoryComedy}>
          Comedy
        </Button>{" "}
        <Button variant="primary" onClick={props.fetchCategoryDrama}>
          Drama
        </Button>{" "}
      </nav>
    </div>
  );
}

export default Categories;
// I need to set a new fetch for each catogory and it needs to update animelist
// there's like 45 categories so I'll just narrow it down to like the 5 most popular...
