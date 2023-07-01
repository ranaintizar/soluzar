import React from "react";
import Image from "next/image";

import Button from "components/button";

import Img from "assets/image-4.png";

import stl from "./CTA.module.scss";

const CTA = () => (
  <div className={stl.cta}>
    <div className={stl.content}>
      <div className={stl.heading}>
        Each student can share their discount code for friends
      </div>
      <p className={stl.desc}>
        But I must explain to you how this mistaken idea of denouncing pleasure
        and praising pain was born and I will give you a complete account of the
        system.
      </p>
      <div className={stl.btn}>
        <Button />
      </div>
    </div>
    <div className={stl.img}>
      <Image src={Img} alt="image" layout="responsive" />
    </div>
  </div>
);

export default CTA;
