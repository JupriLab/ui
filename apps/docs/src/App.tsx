import useDatepickerSingle from "@jupri-lab/datepicker/useDatepickerSingle";
import { useState } from "react";

function App() {
  const [dateInstance, setDateInstance] = useState(new Date());
  const { getDatesOfTheMonth } = useDatepickerSingle({
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
          margin: "auto",
          maxWidth: 500,
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: 24,
          placeItems: "center",
        }}
      >
        {getDatesOfTheMonth().map((date, i) => (
          <p
            style={{
              opacity: date.isCurrentMonth ? 1 : 0.5,
            }}
            key={i}
          >
            {date.value}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
