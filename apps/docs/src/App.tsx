import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useDatePickerSingle from "@jupri-lab/base/useDatePickerSingle";

function App() {
  const [count, setCount] = useState(0);
  const {
    handleChangePerMonth,
    activeDateObject,
    daysInMonth,
    firstDayInMonth,
  } = useDatePickerSingle();

  const handleChangeActiveMonth = (value: number) => {
    handleChangePerMonth(value);
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

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
        }}
      >
        <div
          style={{
            gridColumnStart: firstDayInMonth,
          }}
        ></div>
        {Array.from(Array(daysInMonth).keys()).map((index) => (
          <div key={"calendar-item-" + index + 1}>{index + 1}</div>
        ))}
      </div>

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
