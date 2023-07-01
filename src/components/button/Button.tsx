import React from "react";
import clsx from "clsx";

import stl from "./Button.module.scss";

interface Props {
  variant: "primary" | "secondary" | "tertiary";
  label: string;
  handleOnClick: () => void;
  customClass?: string;
}

const Button = ({ variant, label, handleOnClick, customClass }: Props) => (
  <button
    className={clsx(stl.btn, stl[variant], customClass)}
    onClick={handleOnClick}
  >
    {label}
  </button>
);

Button.defaultProps = {
  variant: "primary",
  label: "Get Started",
  handleOnClick: () => {},
};

export default Button;
