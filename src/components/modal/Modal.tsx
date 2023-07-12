import React from "react";

import AlertBox from "components/alert-box";

import stl from "./Modal.module.scss";

interface Props {
  visible: Boolean;
  setIsVisible: (arg: any) => void;
  data: { variant: string; email: string };
  theme: string;
}

const Modal = ({ visible, setIsVisible, data, theme }: Props) => (
  <div className={stl.modal}>
    <AlertBox
      theme={theme}
      variant={data.variant}
      email={data.email}
      visible={visible}
      handleCloseBtnClick={() => setIsVisible(false)}
    />
  </div>
);

export default Modal;
