import React from "react";

import FeatureCard from "components/feature-card";

import Img1 from "assets/feature-2.png";
import Img2 from "assets/feature-3.png";

import stl from "./FeaturesSection.module.scss";

const FeaturesSection = () => {
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
        <FeatureCard />
        <FeatureCard
          customClass={stl.card}
          src={Img1}
          text="Checked homework by teachers"
        />
        <FeatureCard src={Img2} text="Modern internet platform" />
      </div>
    </div>
  );
};

export default FeaturesSection;
