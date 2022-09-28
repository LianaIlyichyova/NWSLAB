import React from "react";
import Cats from "../cats/cats";
import { useDispatch, useSelector } from "react-redux";
import "./cats-page.scss";

const CatsPage = () => {
    const dispatch = useDispatch();
    const picsCurrentCount = useSelector(function (state) {
      return state.picsCurrentCount.picsCurrentCount;
    });

  const cats = useSelector(function (state) {
    return state.cats.cats;
  });


  function loadMore() {
    const count = picsCurrentCount + 10;
    dispatch({
      type: "LOAD_MORE",
      payload: {
        picsCurrentCount: count,
      },
    });
  }

  console.log(picsCurrentCount)

  return (
    <div className="cats-page">
      <Cats />
      {cats && cats.length > 0 && (
        <input
          type="submit"
          value="Load more"
          className="load_more"
          onClick={loadMore}
        />
      )}
    </div>
  );
};

export default CatsPage;
