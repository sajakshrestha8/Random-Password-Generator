import Option from "./assets/Components/Options";
import axios from "axios";
import "./assets/CSS/index.css";
import { useEffect, useState } from "react";

export default function App() {
  const [output, setOutput] = useState("");
  const [input, setInput] = useState("");
  const [ischecked, setIschecked] = useState(false);

  // async function gettingData() {
  //   const getData = await axios.get("http://localhost:8080").then((data) => {
  //     setOutput(data.data);
  //   });
  // }

  const data = {
    small: "small",
    capital: "capital",
    numbers: "numbers",
    syntax: "syntax",
  };

  async function sendingData() {
    const sendData = await axios
      .post("http://localhost:8080", { input, data })
      .then((data) => {
        setOutput(data.data);
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  useEffect(() => {
    sendingData;
  }, [input]);

  return (
    <>
      <label className="heading">Random Password Generator</label>
      <br />
      <label>Select your Requirements</label>
      <br />
      <Option
        option={"Capital Letter"}
        id="capital"
        name="capital"
        click={() => {
          setIschecked(!ischecked);
        }}
      />{" "}
      <br />
      <Option
        option="Small Letter"
        id="small"
        name="small"
        click={() => {
          setIschecked(!ischecked);
        }}
      />
      <br />
      <Option
        option="Numbers"
        id="numbers"
        name="numbers"
        click={() => {
          setIschecked(!ischecked);
        }}
      />
      <br />
      <Option
        option="Syntax"
        id="syntax"
        name="syntax"
        click={() => {
          setIschecked(!ischecked);
        }}
      />
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
