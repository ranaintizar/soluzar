import React from "react";
import Image from "next/image";
import clsx from "clsx";

import Img from "assets/feature-1.png";

import stl from "./FeatureCard.module.scss";

interface Props {
  src: any;
  text: string;
  customClass?: string;
  theme: string;
}

const FeatureCard = ({ src, text, theme, customClass }: Props) => {
  return (
    <div
      className={clsx(stl.featureCard, stl[`${theme}FeatureCard`], customClass)}
    >
      <div className={stl.img}>
        <Image src={src} alt="image" />
      </div>
      <p className={stl.desc}>{text}</p>
    </div>
  );
};

FeatureCard.defaultProps = {
  src: Img,
  text: "Convenient study schedule",
};

export default FeatureCard;
