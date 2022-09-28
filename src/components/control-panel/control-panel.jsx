import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./control-panel.scss";

const ControlPanel = () => {
  const dispatch = useDispatch();
  const categories = useSelector(function (state) {
    return state.categories.categories;
  });

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/categories")
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: "CATEGORIES",
          payload: {
            categories: data,
          },
        })
      );
  }, []);

  function setCurrentPageId(currentPageId) {
    dispatch({
      type: "CURRENT_PAGE_ID",
      payload: {
        id: currentPageId,
      },
    });
  }

  return (
    <header className="categories">
      {categories &&
        categories.length > 0 &&
        categories.map((categorie) => (
          <Link to={`/cats/${categorie.id}`} key={uuidv4()}>
            <div
              className="categorie"
              onClick={() => setCurrentPageId(categorie.id)}
            >
              {categorie.name}
            </div>
          </Link>
        ))}
    </header>
  );
};

export default ControlPanel;
