import logo from "./logo.svg";
import "./App.css";
import Codelist from "./Component/CodeBuilder/codelist";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header> */}
      <Codelist></Codelist>
    </div>
  );
}

export default App;
