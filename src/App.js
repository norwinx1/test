import { useState } from 'react';
import './App.css';

function App() {
  const [ga, setGa] = useState("");
  const [day, setDay] = useState(8);
  const [month, setMonth] = useState(11);
  const [year, setYear] = useState(2021);
  const [rotation, setRotation] = useState("");
  const [bike, setBike] = useState(false);
  const [car, setCar] = useState(false);
  const [flash, setFlash] = useState('');

  /* Handler for radio button, 1a */
  function handleRadioButton(event) {
    setFlash(event.target.value);
  }

  /* Handler for checkboxes, 2a */
  function handleCheckBoxes(event) {
    if (event.target.name === "vehicle1") {
      setBike(!bike);
    }
    if (event.target.name === "vehicle2") {
      setCar(!car);
    }
  }

  /* Handler for GA, 4b */
  function handleGA(event) {
    setGa(event.target.value);
  }

  /* Handler for day, 4b */
  function handleDay(event) {
    setDay(event.target.value);
  }

  /* Handler for month, 4b */
  function handleMonth(event) {
    setMonth(event.target.value);
  }

  /* Handler for year, 4b */
  function handleYear(event) {
    setYear(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="on" onChange={(event) => handleRadioButton(event)} />
          <label className="form-check-label" htmlFor="inlineRadio1">Blitz ein</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="off" onChange={(event) => handleRadioButton(event)} />
          <label className="form-check-label" htmlFor="inlineRadio2">Blitz aus</label>
        </div>
        <p>{flash}</p>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" onClick={(event) => handleCheckBoxes(event)}></input>
        <label htmlFor="vehicle1"> I have a bike</label>
        <br></br>
        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" onClick={(event) => handleCheckBoxes(event)}></input>
        <label htmlFor="vehicle2"> I have a car</label>
        <br></br>
        <p>{bike ? "bike" : ""}</p>
        <p>{car ? "car" : ""}</p>
        <div className="form-check form-check-inline">                                                      {/* Handler for radio button, 3a */}
          <input className="form-check-input" type="radio" name="rotation" id="rotation1" value="landscape" onChange={(event) => setRotation(event.target.value)} />
          <label className="form-check-label" htmlFor="rotation1">Landscape</label>
        </div>
        <div className="form-check form-check-inline">                                                     {/* Handler for radio button, 3a */}
          <input className="form-check-input" type="radio" name="rotation" id="rotation2" value="portrait" onChange={(event) => setRotation(event.target.value)} />
          <label className="form-check-label" htmlFor="rotation2">Portrait</label>
        </div>
        <p>{rotation}</p>


        {/* HTML for GA, 4a */}
        <h1>1. Wählen Sie ihr GA (mit automatischer Verlängerung)</h1>
        <p>Ihr Preis {ga} CHF mit Datum {day + "." + month + "." + year}</p>
        <span>Ich bestelle ein GA gültig ab </span>
        <input type="number" min="1" max="31" value={day} onChange={(event) => handleDay(event)}></input>
        <input type="number" min="1" max="12" value={month} onChange={(event) => handleMonth(event)}></input>
        <input type="number" min="2021" value={year} onChange={(event) => handleYear(event)}></input>
        <br></br>
        <br></br>
        <table>
          <tr>
            <th></th>
            <th>Preis pro Jahr</th>
            <th></th>
            <th>Preis pro Monat</th>
            <th></th>
          </tr>
          <tr>
            <th></th>
            <th>2. Klasse</th>
            <th>1. Klasse</th>
            <th>2. Klasse</th>
            <th>1. Klasse</th>
          </tr>
          <tr>
            <td>GA Erwachsene 25-64/65 Jahre</td>
            <td><input type="radio" name="ga" value="3860" onChange={(event) => handleGA(event)}></input>CHF 3860.-</td>
            <td><input type="radio" name="ga" value="6300" onChange={(event) => handleGA(event)}></input>CHF 6300.-</td>
            <td><input type="radio" name="ga" value="340" onChange={(event) => handleGA(event)}></input>CHF 340.-</td>
            <td><input type="radio" name="ga" value="545" onChange={(event) => handleGA(event)}></input>CHF 545.-</td>
          </tr>
          <tr>
            <td>GA Senior ab 64/65 Jahren</td>
            <td><input type="radio" name="ga" value="2880" onChange={(event) => handleGA(event)}></input>CHF 2880.-</td>
            <td><input type="radio" name="ga" value="4840" onChange={(event) => handleGA(event)}></input>CHF 4840.-</td>
            <td><input type="radio" name="ga" value="260" onChange={(event) => handleGA(event)}></input>CHF 260.-</td>
            <td><input type="radio" name="ga" value="430" onChange={(event) => handleGA(event)}></input>CHF 430.-</td>
          </tr>
          <tr>
            <td>GA Junior ab 16-25 Jahre</td>
            <td><input type="radio" name="ga" value="2650" onChange={(event) => handleGA(event)}></input>CHF 2650.-</td>
            <td><input type="radio" name="ga" value="4520" onChange={(event) => handleGA(event)}></input>CHF 4520.-</td>
            <td><input type="radio" name="ga" value="245" onChange={(event) => handleGA(event)}></input>CHF 245.-</td>
            <td><input type="radio" name="ga" value="405" onChange={(event) => handleGA(event)}></input>CHF 405.-</td>
          </tr>
          <tr>
            <td>GA Junior Studierende 25-30 Jahre</td>
            <td><input type="radio" name="ga" value="2650" onChange={(event) => handleGA(event)}></input>CHF 2650.-</td>
            <td><input type="radio" name="ga" value="4520" onChange={(event) => handleGA(event)}></input>CHF 4520.-</td>
            <td><input type="radio" name="ga" value="245" onChange={(event) => handleGA(event)}></input>CHF 245.-</td>
            <td><input type="radio" name="ga" value="405" onChange={(event) => handleGA(event)}></input>CHF 405.-</td>
          </tr>
          <tr>
            <td>GA Reisende mit einer Behinderung</td>
            <td><input type="radio" name="ga" value="2480" onChange={(event) => handleGA(event)}></input>CHF 2480.-</td>
            <td><input type="radio" name="ga" value="4050" onChange={(event) => handleGA(event)}></input>CHF 4050.-</td>
            <td><input type="radio" name="ga" value="225" onChange={(event) => handleGA(event)}></input>CHF 225.-</td>
            <td><input type="radio" name="ga" value="355" onChange={(event) => handleGA(event)}></input>CHF 355.-</td>
          </tr>
          <tr>
            <td>GA Kind 6-16 Jahre</td>
            <td><input type="radio" name="ga" value="1645" onChange={(event) => handleGA(event)}></input>CHF 1645.-</td>
            <td><input type="radio" name="ga" value="2760" onChange={(event) => handleGA(event)}></input>CHF 2760.-</td>
            <td><input type="radio" name="ga" value="160" onChange={(event) => handleGA(event)}></input>CHF 160.-</td>
            <td><input type="radio" name="ga" value="250" onChange={(event) => handleGA(event)}></input>CHF 250.-</td>
          </tr>
          <tr>
            <td>GA Duo Partner</td>
            <td><input type="radio" name="ga" value="2700" onChange={(event) => handleGA(event)}></input>CHF 2700.-</td>
            <td><input type="radio" name="ga" value="4340" onChange={(event) => handleGA(event)}></input>CHF 4340.-</td>
            <td><input type="radio" name="ga" value="245" onChange={(event) => handleGA(event)}></input>CHF 245.-</td>
            <td><input type="radio" name="ga" value="380" onChange={(event) => handleGA(event)}></input>CHF 380.-</td>
          </tr>
          <tr>
            <td>GA Familia Kind 6-16 Jahre</td>
            <td><input type="radio" name="ga" value="680" onChange={(event) => handleGA(event)}></input>CHF 680.-</td>
            <td><input type="radio" name="ga" value="2760" onChange={(event) => handleGA(event)}></input>CHF 2760.-</td>
            <td><input type="radio" name="ga" value="75" onChange={(event) => handleGA(event)}></input>CHF 75.-</td>
            <td><input type="radio" name="ga" value="250" onChange={(event) => handleGA(event)}></input>CHF 250.-</td>
          </tr>
          <tr>
            <td>GA Familia Jugend 16-25 Jahre</td>
            <td><input type="radio" name="ga" value="925" onChange={(event) => handleGA(event)}></input>CHF 925.-</td>
            <td><input type="radio" name="ga" value="2790" onChange={(event) => handleGA(event)}></input>CHF 2790.-</td>
            <td><input type="radio" name="ga" value="95" onChange={(event) => handleGA(event)}></input>CHF 95.-</td>
            <td><input type="radio" name="ga" value="255" onChange={(event) => handleGA(event)}></input>CHF 255.-</td>
          </tr>
          <tr>
            <td>GA Familia Partner</td>
            <td><input type="radio" name="ga" value="2180" onChange={(event) => handleGA(event)}></input>CHF 2180.-</td>
            <td><input type="radio" name="ga" value="3520" onChange={(event) => handleGA(event)}></input>CHF 3520.-</td>
            <td><input type="radio" name="ga" value="200" onChange={(event) => handleGA(event)}></input>CHF 200.-</td>
            <td><input type="radio" name="ga" value="310" onChange={(event) => handleGA(event)}></input>CHF 310.-</td>
          </tr>
        </table>
      </header>
    </div>
  );
}

export default App;
