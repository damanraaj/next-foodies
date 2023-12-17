import React from "react";
import classes from "./page.module.css";
import Link from "next/link";
const MealsHomePage = () => {
  return (
    <div>
      <header className={classes["header"]}>
        <h1>
          Delicious meals, created
          <span className={classes.highlight}> by you.</span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself.</p>
        <p className={classes.cta}>
          <Link href={"/meals/share"}>Share your favorite recipe.</Link>
        </p>
      </header>
      <main className={classes["main"]}></main>
    </div>
  );
};

export default MealsHomePage;
