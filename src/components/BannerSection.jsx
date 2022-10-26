import React from "react";
import style from "../styles/BannerSection.module.css";
// import Image from "next/image";

const BannerSection = ({ banner, title }) => {
  return (
    <div className={style["banner-section"]}>
      <div className={style["banner-section__image"]}>
        <img
          src={banner}
          alt="Banner Section"
          objectFit="cover"
          layout="fill"
        />
      </div>
      <h1>{title}</h1>
    </div>
  );
};

export default BannerSection;
