import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <input id="name" type="text" value={name} onChange={(event) => setName(event.target.value)}></input>
        <p>{name}</p>
      </header>
    </div>
  );
}

export default App;
