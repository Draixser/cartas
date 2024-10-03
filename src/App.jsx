import { useState } from 'react';
import reactLogo from './assets/react.svg';
import CardComponent from './assets/components/cards/CardComponent';
import viteLogo from '/vite.svg';
import VideoPlayer from './assets/components/cards/VideoPlayer';

import './App.css';

function MainApp() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div>
        <CardComponent />
        <VideoPlayer />

        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite Logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React Logo" />
        </a>
      </div>
      <h1>React with Vite</h1>
      <div className="card">
        <button onClick={() => setCounter(counter + 1)}>
          The count is {counter}
        </button>
        <p>
          Modify <code>src/App.jsx</code> and save to trigger HMR updates.
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more.
      </p>
    </>
  );
}

export default MainApp;
