import React from 'react';

export interface TabProp {
  num: number;
  activeTab: number;
  onClick: (num: number) => void;
}

const Tab: React.FC<TabProp> = ({num, activeTab, onClick}) => {
  return (
    <button
      className={activeTab === num ? "tab active" : "tab"}
      onClick={() => onClick(num)}
      >
      Tab {num + 1}
    </button>
  );
}

export default Tab;
