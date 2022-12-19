import React, { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";

export function Stars(props: {
  handleRating: any;
  rating: number;
  index: number;
}) {
  // const [rating, setRating] = useState(0);

  // // Catch Rating value
  // const handleRating = (rate: number) => {
  //   setRating(rate);
  // };

  // useEffect(() => {
  //   console.log("Rate " + props.title + " " + rating);
  // }, [rating, props.title]);

  //   const handleReset = () => {
  //     // Set the initial value
  //     setRating(0);
  //   };

  return (
    <div className="App">
      {/* set initial value */}
      <Rating
        onClick={(e: number) => props.handleRating(props.index, e)}
        initialValue={props.rating}
        fillColor="violet"
      />
      {/* <button onClick={handleReset}>reset</button> */}
    </div>
  );
}
