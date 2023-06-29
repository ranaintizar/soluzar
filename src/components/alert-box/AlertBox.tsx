import React from "react";
import clsx from "clsx";

import CloseIcon from "assets/closeIcon.svg";

import stl from "./AlertBox.module.scss";

interface Props {
  email?: string;
  handleCloseBtnClick: () => void;
  variant: string;
  visible: Boolean;
}

const AlertBox = ({ email, handleCloseBtnClick, variant, visible }: Props) => {
  return (
    <div className={clsx(stl.alertBox, visible ? stl.showPopup : "")}>
      <div
        className={stl.header}
        style={
          variant === "success"
            ? { background: "#8fbc8f" }
            : { background: "#ff6961" }
        }
      >
        <div className={stl.title}>
          {variant === "success" ? "Subscribed!" : "Error!"}
        </div>
        <span className={stl.icon} onClick={handleCloseBtnClick}>
          <CloseIcon />
        </span>
      </div>
      <div className={stl.msg}>
        <p>
          {variant === "success"
            ? "You are subcribed successfully."
            : "Please enter a valid email address."}
        </p>
        {variant === "success" ? <p>Your Email :</p> : undefined}
        <p>{variant === "success" ? email : ""}</p>
      </div>
    </div>
  );
};

AlertBox.defaultProps = {
  visible: true,
  variant: "success",
  email: "admin@yourdomain.com",
  handleCloseBtnClick: () => console.log("Close Btn Clicked..."),
};

export default AlertBox;
