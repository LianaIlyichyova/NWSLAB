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

  const picsCurrentCount = useSelector(function (state) {
    return state.picsCurrentCount.picsCurrentCount;
  });

  useEffect(() => {
    dispatch({
      type: "LOAD_MORE",
      payload: {
        picsCurrentCount: 10,
      },
    });
  }, [pageId]);
  useEffect(() => {
    fetch(
      `https://api.thecatapi.com/v1/images/search?limit=${picsCurrentCount}&page=1&category_ids=${pageId}`
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
  }, [pageId, picsCurrentCount]);

  return (
    <div className="cats">
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
