import './App.css';
import Header from './components/Header';
import FeedBackData from './data/FeedBackData';

import { useState } from 'react';
import FeedBackList from './components/FeedBackList';

function App() {

  const [FeedBack, setFeedBack] = useState(FeedBackData)

  return (
    <>
      <Header text="FeedBack UI" />
      <div className="App">
        <FeedBackList feedback={FeedBack} />
      </div>
    </>
  );
}

export default App;
