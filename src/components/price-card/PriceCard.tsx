import React from "react";

import Button from "components/button";

import TickIcon from "assets/tick.svg";
import CrossIcon from "assets/cross.svg";

import stl from "./PriceCard.module.scss";

interface Props {
  type: string;
  variant: "monthly" | "yearly";
}

const PriceCard = ({ type, variant }: Props) => {
  const pricesMonthly: { [index: string]: string } = {
    start: "50$",
    advance: "75$",
    premium: "100$",
  };

  const pricesYearly: { [index: string]: string } = {
    start: "500$",
    advance: "750$",
    premium: "1000$",
  };

  function capitalizeFirstLetter(str: string) {
    if (typeof str !== "string") {
      throw new Error("Input must be a string");
    }

    if (str.length === 0) {
      return str;
    }

    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div className={stl.priceCard}>
      <div className={stl.title}>{capitalizeFirstLetter(type)}</div>
      <p className={stl.desc}>
        On the other hand, we denounce with righteous indignation and dislike
        men who are so beguiled and demoralized
      </p>
      <div className={stl.price}>
        <span className={stl.amount}>
          {variant === "yearly" ? pricesYearly[type] : pricesMonthly[type]}
        </span>
        <span className={stl.variant}>
          {variant === "yearly" ? "/year" : "/month"}
        </span>
      </div>
      <ul className={stl.features}>
        <li>
          <TickIcon /> Videos of lesson
        </li>
        <li>
          <TickIcon /> Homework check
        </li>
        <li>
          {(type === "start" && <CrossIcon />) || <TickIcon />} Additional
          practical tasks
        </li>
        <li>
          {(type === "start" && <CrossIcon />) || <TickIcon />} Monthly
          conferences
        </li>
        <li>
          {(type === "start" && <CrossIcon />) ||
            (type === "advance" && <CrossIcon />) || <TickIcon />}
          Personal advice from teachers
        </li>
      </ul>
      <div className={stl.btn}>
        <Button variant="tertiary" />
      </div>
    </div>
  );
};

PriceCard.defaultProps = {
  type: "start",
  variant: "monthly",
};

export default PriceCard;
