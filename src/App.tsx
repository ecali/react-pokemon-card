import { useEffect, useState } from "react";
import "./App.css";
import { Card } from "./components/Card";
import { usePokeApi } from "./hooks/usePokeApi";

function App() {
  const [random, setRandom] = useState(1);

  const { data, isLoading, isError } = usePokeApi(random);

  const handleGenerate = () => {
    setRandom(Math.floor(Math.random() * 150) + 1);
  };
  useEffect(() => {
    setRandom(Math.floor(Math.random() * 150) + 1);
  }, []);

  return (
    <div className="App">
      {!isError ? (
        <div className="container">{data ? <Card poke={data} /> : ""}</div>
      ) : isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <h2>{isError}</h2>
      )}

      <button className="btn-generate" onClick={handleGenerate}>
        Generate Pokemon
      </button>
    </div>
  );
}

export default App;
