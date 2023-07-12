import React from "react";

import FeatureCard from "components/feature-card";

import Img1 from "assets/feature-2.png";
import Img2 from "assets/feature-3.png";

import stl from "./FeaturesSection.module.scss";

interface Props {
  theme: string;
}

const FeaturesSection = ({ theme }: Props) => {
  return (
    <div id="features" className={stl.featuresSec}>
      <div className={stl.content}>
        <div className={stl.heading}>Why are we better than others</div>
        <p className={stl.desc}>
          On the other hand, we denounce with righteous indignation and dislike
          men who are so beguiled and demoralized
        </p>
      </div>
      <div className={stl.cards}>
        <FeatureCard theme={theme} />
        <FeatureCard
          customClass={stl.card}
          src={Img1}
          text="Checked homework by teachers"
          theme={theme}
        />
        <FeatureCard src={Img2} text="Modern internet platform" theme={theme} />
      </div>
    </div>
  );
};

export default FeaturesSection;
