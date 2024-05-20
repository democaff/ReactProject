import React, { useState } from "react";
import data from "./data";
import "./style.css";
const Accordian: React.FC = () => {
  const [selected, setSelected] = React.useState<string | null>(null);

  const [mutatedData, setMutatedData] = React.useState<boolean | null>(false);
  const [multipleSelect, setMultipleSelect] = useState<(string | number)[]>([]);
  const handleMultipleSelect = (id: string) => {
    let cpyMultipleSelect = [...multipleSelect];

    const findIndex = cpyMultipleSelect.indexOf(id);
    if (findIndex === -1) {
      cpyMultipleSelect.push(id);
    } else {
      cpyMultipleSelect.splice(findIndex, 1);
    }
    setMultipleSelect(cpyMultipleSelect);
    console.log("====================================");
    console.log("multipleSelect", multipleSelect);
    console.log("====================================");
  };

  const handleSingLeSelect = (id: string) => {
    setSelected(id === selected ? null : id);
  };
  return (
    <div className="wrapper">
      <div className="accordian">
        <button onClick={() => setMutatedData(!mutatedData)} className="button">
          {mutatedData ? "多选" : "单选"}
        </button>
        {data && data.length > 0
          ? data.map((item) => {
              return (
                <div key={item.id} className="item">
                  <h3
                    className="title"
                    onClick={
                      mutatedData
                        ? () => handleMultipleSelect(item.id)
                        : () => handleSingLeSelect(item.id)
                    }
                  >
                    {item.question}
                  </h3>
                  {mutatedData
                    ? multipleSelect.indexOf(item.id) !== -1 && (
                        <p className="answer">{item.answer}</p>
                      )
                    : selected === item.id && (
                        <p className="answer">{item.answer}</p>
                      )}

                  <p>+</p>
                </div>
              );
            })
          : "null"}
      </div>
    </div>
  );
};

export default Accordian;
