import React from "react";

const MealPage = ({ params }) => {
  return (
    <div>
      MealPage
      <p>{params.slug}</p>
    </div>
  );
};

export default MealPage;
