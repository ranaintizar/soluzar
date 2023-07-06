import React from "react";
import clsx from "clsx";

import stl from "./Button.module.scss";

interface Props {
  variant: "primary" | "secondary";
  label: string;
  handleOnClick: () => void;
  customClass?: string;
  size: "lg" | "md" | "sm";
}

const Button = ({
  variant,
  label,
  handleOnClick,
  size,
  customClass,
}: Props) => {
  return (
    <button
      className={clsx(stl.btn, stl[variant], stl[size], customClass)}
      onClick={handleOnClick}
    >
      {label}
    </button>
  );
};

Button.defaultProps = {
  variant: "primary",
  label: "Get Started",
  handleOnClick: () => console.log("Button Clicked..."),
  size: "lg",
};

export default Button;
