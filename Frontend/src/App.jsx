import Option from "./assets/Components/Options";
import axios from "axios";
import "./assets/CSS/index.css";
import { useEffect, useState } from "react";

export default function App() {
  const [output, setOutput] = useState("");
  const [input, setInput] = useState("");
  const [ischeckedsmall, setIscheckedsmall] = useState(false);
  const [ischeckedcapital, setIscheckedcapital] = useState(false);
  const [ischeckednumber, setIscheckednumber] = useState(false);
  const [ischeckedsyntax, setIscheckedsyntax] = useState(false);

  // async function gettingData() {
  //   const getData = await axios.get("http://localhost:8080").then((data) => {
  //     setOutput(data.data);
  //   });
  // }

  const data = {
    small: ischeckedsmall,
    capital: ischeckedcapital,
    numbers: ischeckednumber,
    syntax: ischeckedsyntax,
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
        option={"Small Letter"}
        id="small"
        name="small"
        click={() => {
          setIscheckedsmall(!ischeckedsmall);
        }}
      />{" "}
      <br />
      <Option
        option="Capital Letter"
        id="capital"
        name="capital"
        click={() => {
          setIscheckedcapital(!ischeckedcapital);
        }}
      />
      <br />
      <Option
        option="Numbers"
        id="numbers"
        name="numbers"
        click={() => {
          setIscheckednumber(!ischeckednumber);
        }}
      />
      <br />
      <Option
        option="Syntax"
        id="syntax"
        name="syntax"
        click={() => {
          setIscheckedsyntax(!ischeckedsyntax);
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
