import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container ">
        <div className="weather-app-wrapper">
          <Weather />
          <footer>
            Coded by{" "}
            <a href="https://roaring-meerkat-e39285.netlify.app/">
              Yarden Segal
            </a>{" "}
            and is <a href="https://github.com/yardenSegal13">Open-sourced</a>{" "}
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
