import React from "react";

const Popup = ({ id, header, body, footer, onclose }) => {
  return (
    <div id={id || "modal"} className="modal">
      <div className="modal-overlay" onClick={onclose}></div>
      <div className="modal-content">
        <div className="header">
          <span className="closeModal" onClick={onclose}>
            &times;
          </span>
          <h2>{header ? header : "Header"}</h2>
        </div>
        <div className="body">
          <h2>{body ? body : <p>这就是一个简单的模态框</p>}</h2>
        </div>
        <div className="footer">
          <h2>{footer ? footer : "Footer"}</h2>
        </div>
      </div>
    </div>
  );
};

export default Popup;
