import React, { useState } from 'react';
import { ContentItem } from './contents';

export interface TabContentProp {
  item: ContentItem | undefined;
}
export const TabContent: React.FC<TabContentProp> = ({ item }) => {
  const [showDetails, setShowDeatils] = useState(true);
  const [likes, setLikes] = useState(0);

  return (
    <div className="tab-content">
      <h4>{item?.summary}</h4>
      {showDetails && <p>{item?.details}</p>}

      <div className="tab-actions">
        <button onClick={() => setShowDeatils((h) => !h)}>
          {showDetails ? "Hide" : "Show"} details
        </button>
        <div className="hears-counter">
          <span>{likes} ❤️</span>
          <button onClick={() => setLikes(likes + 1)}>+</button>
          <button>+++</button>
        </div>
      </div>
      <div className="tab-undo">
        <button>Undo</button>
        <button>Undo in 2s</button>
      </div>
    </div>
  );
}

export const DifferentContent: React.FC = () => {
  return (
    <div className="tab-content">
      <h4>I'm a DIFFERENT tab, so I reset state 💣💥</h4>
    </div>
  );
}
