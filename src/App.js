import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [toogle, setToggle] = useState(true);
  const [counter, setCounter] = useState(0);
  const [number, setNumber] = useState(1);
  const [bike, setBike] = useState(false);
  const [car, setCar] = useState(false);
  const [boat, setBoat] = useState(false);
  const [course, setCourse] = useState('');

  function handleInputChange(event) {
    if (event.target.name === "vehicle1") {
      setBike(!bike);
    }
    if (event.target.name === "vehicle2") {
      setCar(!car);
    }
    if (event.target.name === "vehicle3") {
      setBoat(!boat);
    }
  }

  function handleSubmit() {
    alert(name + ", " + toogle + ", " + counter + ", " + number + ", " + bike + ", " + course);
    setName("");
    setToggle(true);
    setCounter(0);
    setNumber(1);
    setBike(false);
    setCourse("");
  }

  return (
    <div className="App">
      <header className="App-header">
        <input id="name" type="text" value={name} onChange={(event) => setName(event.target.value)}></input>
        <p>{name}</p>
        <input id="toogle" type="button" class="button" value={toogle} onClick={() => setToggle(!toogle)}></input>
        <br></br>
        <input id="toogle" type="button" class="button" value={counter} onClick={() => setCounter(counter + 1)}></input>
        <br></br>
        <select class="form-select" onChange={(event) => setNumber(event.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <p>Selected number: {number}</p>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" onClick={(event) => handleInputChange(event)}></input>
        <label htmlFor="vehicle1"> I have a bike</label>
        <br></br>
        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" onClick={(event) => handleInputChange(event)}></input>
        <label htmlFor="vehicle2"> I have a car</label>
        <br></br>
        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" onClick={(event) => handleInputChange(event)}></input>
        <label htmlFor="vehicle3"> I have a boat</label>
        <br></br>
        <p>{bike ? "bike" : ""}</p>
        <p>{car ? "car" : ""}</p>
        <p>{boat ? "boat" : ""}</p>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="react" onChange={event => setCourse(event.target.value)}/>
          <label className="form-check-label" htmlFor="inlineRadio1">React Kurs</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="js" onChange={event => setCourse(event.target.value)}/>
          <label className="form-check-label" htmlFor="inlineRadio2">JavaScript Kurs</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="angular" disabled onChange={event => setCourse(event.target.value)}/>
          <label className="form-check-label" htmlFor="inlineRadio3">Angular Kurs</label>
        </div>
        <p>{course}</p>
        <input type="button" value="Submit" onClick={() => handleSubmit()}></input>
      </header>
    </div>
  );
}

export default App;
