import React from 'react';
import Tabbed from './Tabbed';
import { contents } from './contents';

function App() {
  return (
    <div>
      <Tabbed contents={contents} />
    </div>
  );
}

export default App;
