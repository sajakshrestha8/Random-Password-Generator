import Option from "./assets/Components/Options";
import axios from "axios";
import "./assets/CSS/index.css";
import { useEffect, useState } from "react";

export default function App() {
  const [output, setOutput] = useState("");
  const [input, setInput] = useState("");

  // async function gettingData() {
  //   const getData = await axios.get("http://localhost:8080").then((data) => {
  //     setOutput(data.data);
  //   });
  // }

  async function sendingData() {
    const sendData = await axios
      .post("http://localhost:8080", { input })
      .then((data) => {
        setOutput(data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  useEffect(() => {
    sendingData;
    // gettingData;
  }, [input]);

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
      <input
        type="text"
        id="input"
        name="input"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          sendingData();
        }}
      >
        Generate
      </button>
      <br />
      <div className="output">
        <label>{output}</label>
      </div>
    </>
  );
}
