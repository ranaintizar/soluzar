import React, { useEffect } from "react";
import clsx from "clsx";

import stl from "./ToggleBtn.module.scss";

interface Props {
  giveStatus: (arg: any) => void;
}

const ToggleBtn = ({ giveStatus }: Props) => {
  const [isActive, setIsActive] = React.useState(false);

  useEffect(() => {
    giveStatus(isActive);
  }, [isActive]);

  return (
    <div
      className={clsx(stl.toggleBtn, isActive ? stl.active : "")}
      onClick={() => {
        setIsActive(!isActive);
        giveStatus(isActive);
      }}
    >
      <div className={stl.btn} />
    </div>
  );
};

ToggleBtn.defaultProps = {
  giveStatus: (val: Boolean) => console.log(val),
};

export default ToggleBtn;
