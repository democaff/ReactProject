import React, { useState } from "react";
import "./index.css";
export interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TagesProps {
  tabs: Tab[];
  onChange: (index: number) => void;
}

const Tages: React.FC<TagesProps> = ({ tabs, onChange }) => {
  const [indexs, setIndexs] = useState(0);

  const handleOnChange = (index: number) => {
    setIndexs(index);
    onChange(index);
  };

  return (
    <div className="wrapper">
      <div className="heading">
        {tabs.map((item, index) => (
          <div
            key={index}
            onClick={() => handleOnChange(index)}
            className={`tab-item ${indexs === index ? "active" : ""}`}
          >
            <span className="label">{item.label}</span>
          </div>
        ))}
      </div>
      <div className="content" style={{ color: "red" }}>
        {tabs[indexs] && tabs[indexs].content}
      </div>
    </div>
  );
};

export default Tages;
