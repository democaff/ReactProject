import React from "react";
import Popup from "./modal";
import "./popup.css";
const ModalTest = () => {
  const [show, setShow] = React.useState(false);

  const handleToggleModal = () => {
    setShow((prev) => !prev);
    console.log(show);
  };

  const onClose = () => {
    setShow(false);
  };

  return (
    <div>
      <button onClick={handleToggleModal}>Open Modal</button>
      {show && <Popup onclose={onClose} body={<div>自定义主体</div>} />}
    </div>
  );
};

export default ModalTest;
