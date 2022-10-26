import React from "react";

import Background from "../images/background.jpg";
import style from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <main>
      <div className={style["hero__image"]}>
        <img
          src={Background}
          alt="Intro Image"
          // layout="fill"
          // objectFit="cover"
        />
      </div>
      <div className={style["hero__title"]}>
        <h1>Fetch API: The Meal DB</h1>
        <h2>Working with Next.js</h2>
      </div>
    </main>
  );
};

export default Hero;
