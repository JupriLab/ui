import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useDatePickerSingle from "@jupri-lab/base/useDatePickerSingle";

function App() {
  const [count, setCount] = useState(0);
  const { handleChangePerYear, activeDateObject } = useDatePickerSingle({});

  const handleChangeActiveMonth = (value: number) => {
    handleChangePerYear(value);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>{activeDateObject.toString()}</h2>

      <div className="card">
        <input
          type="number"
          onChange={(e) =>
            handleChangeActiveMonth(parseInt(e.currentTarget.value) || 0)
          }
        />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
