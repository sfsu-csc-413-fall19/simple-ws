import React from 'react';
import './App.css';

function App() {
  const [clickCount, setClickCount] = React.useState(0);
  const ws = React.useRef(new WebSocket('ws://localhost:1234/ws'));

  ws.current.onopen = () => {
    console.log('Connection open!')
  };

  ws.current.onmessage = (message) => {
    console.log(message);
    setClickCount(Number(message.data));
  };

  ws.current.onclose = () => {
    console.log('connection closed');
  };

  ws.current.onerror = () => {
    console.log('ws error');
  };

  const handleClick = () => {
    ws.current.send(clickCount + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick} className="clicker">
          {clickCount}
        </button>
      </header>
    </div>
  );
}

export default App;
