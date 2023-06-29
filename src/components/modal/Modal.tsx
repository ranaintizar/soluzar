import React from "react";

import AlertBox from "components/alert-box";

import stl from "./Modal.module.scss";

interface Props {
  visible: Boolean;
  setIsVisible: (arg: any) => void;
  data: { variant: string; email: string };
}

const Modal = ({ visible, setIsVisible, data }: Props) => {
  return (
    <div className={stl.modal}>
      <AlertBox
        variant={data.variant}
        email={data.email}
        visible={visible}
        handleCloseBtnClick={() => setIsVisible(false)}
      />
    </div>
  );
};

export default Modal;
