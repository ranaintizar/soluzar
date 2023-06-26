import React from "react";
import Image from "next/image";
import clsx from "clsx";

import Button from "components/button";

import Img from "assets/image-2.png";

import stl from "./HeroSection.module.scss";

interface Props {
  swap: Boolean;
  src: string;
  heading: string;
  headingSpecial: string;
  desc: string;
}

const HeroSection = ({ swap, src, heading, headingSpecial, desc }: Props) => {
  return (
    <div className={clsx(stl.heroSection, swap ? stl.right : "")}>
      <div className={stl.img}>
        <Image src={src} alt="image" layout="responsive" />
      </div>
      <div className={stl.content}>
        <div className={stl.heading}>
          {heading} <span>{headingSpecial}</span>
        </div>
        <p className={stl.desc}>{desc}</p>
        <div className={stl.btn}>
          <Button />
        </div>
      </div>
    </div>
  );
};

HeroSection.defaultProps = {
  swap: false,
  src: Img,
  heading: "We have been improving our product",
  headingSpecial: "for many years",
  desc: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized",
};

export default HeroSection;
