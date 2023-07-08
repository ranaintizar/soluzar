import React from "react";

import FeatureCard from "components/feature-card";

import stl from "./FeaturesSection.module.scss";

const FeaturesSection = () => {
  return (
    <div className={stl.featuresSec}>
      <div className={stl.content}>
        <div className={stl.heading}>Why are we better than others</div>
        <p className={stl.desc}>
          On the other hand, we denounce with righteous indignation and dislike
          men who are so beguiled and demoralized
        </p>
      </div>
      <div className={stl.cards}>
        <FeatureCard />
        <FeatureCard customClass={stl.card} />
        <FeatureCard />
      </div>
    </div>
  );
};

export default FeaturesSection;
