import React, { useState } from 'react';
import { ContentItem, contents } from './contents';

export interface TabContentProp {
  item: ContentItem | undefined;
}
export const TabContent: React.FC<TabContentProp> = ({ item }) => {
  const [showDetails, setShowDeatils] = useState(true);
  const [likes, setLikes] = useState(0);
  const [likeState, setLikeState] = useState(
    Object.fromEntries(contents.map((item) => [item.id, 0]))
  );

  const handleLikeState = (id: number | undefined) => {
    if (id === undefined) return;
    setLikeState((prevState) => ({
      ...prevState,
      [id]: prevState[id] + 1
    }))
  }

  const handleUndo = () => {
    setShowDeatils(true);
    setLikes(0);
  }

  const handleUndoLater = () => {
    setTimeout(handleUndo, 2000);
  }

  // @ts-ignore
  return (
    <div className="tab-content">
      <h4>{item?.summary}</h4>
      {showDetails && <p>{item?.details}</p>}

      <div className="tab-actions">
        <button onClick={() => setShowDeatils((h) => !h)}>
          {showDetails ? "Hide" : "Show"} details
        </button>
        <div className="hearts-counter">
          <span>{likes} ❤️</span>
          <button onClick={() => setLikes((likes) => likes + 1)}>+</button>
          <button onClick={() => setLikes((likes) => likes + 3)}>+++</button>
        </div>
      </div>
      <div className="tab-undo">
        <button onClick={() => handleUndo()}>Undo</button>
        <button onClick={() => handleUndoLater()}>Undo in 2s</button>
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
