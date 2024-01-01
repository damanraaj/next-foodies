import React, { Suspense } from "react";
import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";

export const metadata = {
  title: "NextLevel Meals",
  description: "Delicious meals, shared by a food-loving community.",
};
async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}
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
      <main className={classes["main"]}>
        <Suspense
          fallback={<p className={classes["loading"]}>Loading Meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </div>
  );
};

export default MealsHomePage;
