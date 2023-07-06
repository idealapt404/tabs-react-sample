import React, { useState } from 'react';
import { ContentItem } from './contents';
import Tab from './Tab';
import { DifferentContent, TabContent } from './TabContent';

export interface TabbedProp {
  contents: ContentItem[];
}
const Tabbed: React.FC<TabbedProp> = ({ contents }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="tabs">
        <Tab num={0} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={1} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={2} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={3} activeTab={activeTab} onClick={setActiveTab} />
      </div>
      {activeTab <= 2 ? (
        <TabContent item={contents.at(activeTab)} />
      ) : (
        <DifferentContent />
      )}
    </div>
  );
}

export default Tabbed;
