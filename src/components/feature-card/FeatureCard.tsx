import React from "react";

import Image from "assets/feature-1.png";

import stl from "./FeatureCard.module.scss";

interface Props {
  src: string;
  text: string;
}

const FeatureCard = ({ src, text }: Props) => {
  return (
    <div className={stl.featureCard}>
      <div className={stl.img}>
        <img src={src} />
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
