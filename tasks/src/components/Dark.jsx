// const Dark=()=>{
//     return(
//         <div className="flex justify-center items-center mt-5">
//             <button type="button" className="bg-blue-400 text-black p-4 text-center flex rounded-lg"> switch Theme</button>
/*
import { useState } from "react";

//         </div>

//     )
// }
// export  default Dark;
import { useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1>{theme === "light" ? "Light Mode" : "Dark Mode"} On</h1>

      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
};

export default ThemeToggle;
*/
































const Dark=()=>{

  const [theme,setTheme]=useState('light')

  const handleSitch=()=>{
    setTheme(theme==="light"?"dark":"light")
  }
  return(
    <div
    style={{
      backgroundColor:theme==="light"?"white":"black" ,
      color:theme==="light"?"black":"white"
    }}>
      <h2>{theme==="light"?"light mode":"Dark"} on</h2>
      <button onClick={handleSitch}>switch{theme==="light"?"dark":"light"}</button>

    </div>
  )
}
export default Dark;
