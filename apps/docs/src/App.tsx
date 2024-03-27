import useDatepickerSingle from "@jupri-lab/datepicker/useDatepickerSingle";
import { useState } from "react";

const MONTHS = new Map([
  [0, "Jan"],
  [1, "Feb"],
  [2, "Mar"],
  [3, "Apr"],
  [4, "May"],
  [5, "Jun"],
  [6, "Jul"],
  [7, "Aug"],
  [8, "Sep"],
  [9, "Oct"],
  [10, "Nov"],
  [11, "Dec"],
]);

function App() {
  const [dateInstance, setDateInstance] = useState(new Date());
  const {
    getDatesOfTheMonth,
    getNextMonthHandler,
    getPreviousMonthHandler,
    getMonth,
  } = useDatepickerSingle({
    dateInstance,
    onDateInstanceChange: setDateInstance,
  });

  return (
    <div
      style={{
        width: "100vw",
      }}
    >
      <div
        style={{
          maxWidth: 500,
          marginInline: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <p>{MONTHS.get(getMonth())}</p>
        <div
          style={{
            display: "flex",
            marginInline: "auto",
            alignItems: "center",
            width: "100%",
          }}
        >
          <button onClick={getPreviousMonthHandler}>Prev</button>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              placeItems: "center",
              width: "100%",
            }}
          >
            {getDatesOfTheMonth().map((date) => (
              <p
                style={{
                  opacity: date.isCurrentMonth ? 1 : 0.5,
                }}
              >
                {date.value}
              </p>
            ))}
          </div>
          <button onClick={getNextMonthHandler}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default App;
