import Option from "./assets/Components/Options";
import axios from "axios";
import "./assets/CSS/index.css";
import { useState } from "react";

export default function App() {
  const [output, setOutput] = useState("");

  axios.get("http://localhost:8080").then((data) => {
    setOutput(data.data);
  });

  return (
    <>
      <label className="heading">Random Password Generator</label>
      <br />
      <label>Select your Requirements</label>
      <br />
      <Option option={"Capital Letter"} /> <br />
      <Option option="Small Letter" />
      <br />
      <Option option="Numbers" />
      <br />
      <Option option="Syntax" />
      <br />
      <label>Enter the number of password you want to generate</label>
      <input type="text" id="input" name="input" />
      <br />
      <button>Generate</button>
      <br />
      <div className="output">
        <label>{output}</label>
      </div>
    </>
  );
}
