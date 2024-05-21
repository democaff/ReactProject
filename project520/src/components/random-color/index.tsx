import React, { useEffect, useState } from "react";
import "./index.css";

const RandomColor: React.FC = () => {
  const [typeColor, setTypeColor] = React.useState<string>("hex");
  const [color, setColor] = React.useState<string>("#000000");
  const [copyStatus, setCopyStatus] = useState<string>("Copy");
  function randomColorUtility(length: number) {
    return Math.floor(Math.random() * length);
  }

  const handleCreateRandomColor = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  };
  const getColor = () => {
    navigator.clipboard
      .writeText(color)
      .then(() => {
        setCopyStatus("Copied");
        setTimeout(() => setCopyStatus("Copy"), 2000); // 2秒后恢复按钮文本为 "Copy"
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };
  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    if (typeColor === "rgb") {
      handleCreateRandomRgbColor();
    } else {
      handleCreateRandomColor();
    }
  }, [typeColor]);

  return (
    <div
      style={{ width: "100vw", height: "100vh", backgroundColor: color }}
      className="container"
    >
      <div>
        <button onClick={() => setTypeColor("hex")}>Create HEX Color</button>
        <button onClick={() => setTypeColor("rgb")}>Create RGB Color</button>
        <button
          onClick={
            typeColor === "hex"
              ? handleCreateRandomColor
              : handleCreateRandomRgbColor
          }
        >
          Generate Random Color
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          color: "white",
          fontSize: "60px",
          margin: "50px",
        }}
      >
        <h3>{typeColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1 className="h1color">{color}</h1>
        <button onClick={getColor}>{copyStatus}</button>
      </div>
    </div>
  );
};

export default RandomColor;
