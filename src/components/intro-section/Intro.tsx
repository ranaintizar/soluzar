import React from "react";
import Image from "next/image";

import Button from "components/button";

import Img from "assets/intro.png";

import stl from "./Intro.module.scss";

const Intro = () => {
  return (
    <div id="overview" className={stl.intro}>
      <div className={stl.content}>
        <h1 className={stl.heading}>
          Develop all your skills without diligence
        </h1>
        <div className={stl.desc}>
          But I must explain to you how this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system.
        </div>
        <div className={stl.btnContainer}>
          <Button />
          <Button variant="secondary" label="Discount" />
        </div>
      </div>
      <div className={stl.img}>
        <Image src={Img} alt="image" />
      </div>
    </div>
  );
};

export default Intro;
