import React from "react";
import Tages, { Tab } from "./tages";
import RandomCop from "./RandomCop";

const Tabs: React.FC = () => {
  const tagss: Tab[] = [
    {
      label: "Tab 1",
      content: <div>这里是选项卡的内容</div>,
    },
    {
      label: "Tab 2",
      content: <div>这里是选项卡的内容</div>,
    },
    {
      label: "Tab 3",
      content: <RandomCop />,
    },
  ];

  const handleChange = (index: number) => {
    console.log("Switched to tab:", index); // 添加日志以确认函数被调用
  };

  return <Tages tabs={tagss} onChange={handleChange} />;
};

export default Tabs;
