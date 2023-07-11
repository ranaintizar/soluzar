import React from "react";
import Image from "next/image";
import clsx from "clsx";

import Img from "assets/feature-1.png";

import stl from "./FeatureCard.module.scss";

interface Props {
  src: any;
  text: string;
  customClass?: string;
}

const FeatureCard = ({ src, text, customClass }: Props) => {
  return (
    <div className={clsx(stl.featureCard, customClass)}>
      <div className={stl.img}>
        <Image src={src} alt="image" />
      </div>
      <div className={stl.desc}>{text}</div>
    </div>
  );
};

FeatureCard.defaultProps = {
  src: Img,
  text: "Convenient study schedule",
};

export default FeatureCard;
