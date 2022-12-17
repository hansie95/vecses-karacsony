import logo from "./zak-fej2.png";
import zakBasz from "./zakics_meleg.jpg";
import "./App.css";
import { useState } from "react";

function App() {
  const [pic, setPic] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        {pic === false && (
          <div>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Boldog Karácsonyt!</h1>
          </div>
        )}
        {pic && <img src={zakBasz} className="zak_basz" alt="logo" />}
        <button onClick={() => setPic(!pic)}>
          {!pic ? "Meglepi" : "Vissza"}
        </button>
      </header>
    </div>
  );
}

export default App;
