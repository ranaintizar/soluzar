import React, { useEffect } from "react";
import clsx from "clsx";

import ToggleBtn from "components/toggle-btn";
import PriceCard from "components/price-card";

import stl from "./PlansSection.module.scss";

const PlansSection = () => {
  const [status, getStatus] = React.useState(false);
  const [currentSlide, setCurrentSlide] = React.useState("slide2");
  const [width, setWidth] = React.useState(500);

  useEffect(() => {
    function measureWidth() {
      setWidth(document.body.clientWidth);
    }
    measureWidth();
    window.addEventListener("resize", measureWidth);
    return () => window.removeEventListener("resize", measureWidth);
  }, []);

  useEffect(() => {
    width > 1180 && expandSlider();
  }, [width]);

  const expandSlider = () => {
    const slider = document.getElementById("slider");
    //@ts-ignore
    slider.style.transform = "translateX(0)";
    setCurrentSlide("slide2");
  };

  const handleSlider = (e: any) => {
    const slider = document.getElementById("slider");
    const ele = e.target;
    switch (ele.id) {
      case "slide1":
        //@ts-ignore
        slider.style.transform = "translateX(400px)";
        setCurrentSlide("slide1");
        break;
      case "slide2":
        //@ts-ignore
        slider.style.transform = "translateX(0)";
        setCurrentSlide("slide2");
        break;

      case "slide3":
        //@ts-ignore
        slider.style.transform = "translateX(-400px)";
        setCurrentSlide("slide3");
        break;

      default:
        //@ts-ignore
        slider.style.transform = "translateX(0)";
        setCurrentSlide("slide2");
        break;
    }

    ele.classList.add(stl.active);
  };

  return (
    <div id="pricing" className={stl.planSec}>
      <div className={stl.content}>
        <div className={stl.heading}>Here are all our plans</div>
        <p className={stl.desc}>
          On the other hand, we denounce with righteous indignation and dislike
          men who are so beguiled and demoralized
        </p>
      </div>
      <div className={stl.variant}>
        <span>Monthly</span>
        <ToggleBtn giveStatus={getStatus} />
        <span>Yearly</span>
      </div>
      <div className={stl.slider}>
        <div id="slider" className={stl.priceCards}>
          <PriceCard variant={status ? "yearly" : "monthly"} />
          <PriceCard type="advance" variant={status ? "yearly" : "monthly"} />
          <PriceCard type="premium" variant={status ? "yearly" : "monthly"} />
        </div>
        <div className={stl.sliderDots}>
          <div
            className={clsx(
              stl.dot,
              currentSlide === "slide1" ? stl.active : ""
            )}
            id="slide1"
            onClick={handleSlider}
          />
          <div
            className={clsx(
              stl.dot,
              currentSlide === "slide2" ? stl.active : ""
            )}
            id="slide2"
            onClick={handleSlider}
          />
          <div
            className={clsx(
              stl.dot,
              currentSlide === "slide3" ? stl.active : ""
            )}
            id="slide3"
            onClick={handleSlider}
          />
        </div>
      </div>
    </div>
  );
};

export default PlansSection;
