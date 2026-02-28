import { useState } from "react";

const Color = () => {
  const [color, setColor] = useState("white");

  return (
    <div style={{ backgroundColor: color, height: "100px" }}>
      <button onClick={() => setColor("lightblue")}>Change Color</button>
    </div>
  );
};

export default Color;
