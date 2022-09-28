import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import "./cats.scss";

const Cats = () => {
  const dispatch = useDispatch();
  const pageId = useSelector(function (state) {
    return state.currentPageId.id;
  });

  const cats = useSelector(function (state) {
    return state.cats.cats;
  });

  useEffect(() => {
    fetch(
      `https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${pageId}`
    )
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: "CATS",
          payload: {
            cats: data,
          },
        })
      );
  }, [pageId]);

  console.log(pageId);

  return (
    <div className="cats">
        {!pageId && <h1>Choose cats pictures by categorie</h1>}
      {cats &&
        cats.length > 0 &&
        cats.map((cat) => (
          <div key={uuidv4()} className="cat">
            <img src={cat.url} alt="cat" className="cat_pic" />
          </div>
        ))}
    </div>
  );
};

export default Cats;
