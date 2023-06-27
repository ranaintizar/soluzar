import React from "react";
import clsx from "clsx";

import Image from "assets/feature-1.png";

import stl from "./FeatureCard.module.scss";

interface Props {
  src: string;
  text: string;
  customClass?: string;
}

const FeatureCard = ({ src, text, customClass }: Props) => {
  return (
    <div className={clsx(stl.featureCard, customClass)}>
      <div className={stl.img}>
        <img src={src} alt="image-1" />
      </div>
      <div className={stl.desc}>{text}</div>
    </div>
  );
};

FeatureCard.defaultProps = {
  src: Image.src,
  text: "Convenient study schedule",
};

export default FeatureCard;
