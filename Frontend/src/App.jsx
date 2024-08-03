import Option from "./assets/Components/Options";
import axios from "axios";
import "./assets/CSS/index.css";
import { useEffect, useState } from "react";
import Logo from "./assets/Image/logo.png";

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
      <div className="heading">
        <label>Random Password Generator</label>
      </div>
      <div className="moto">
        <label>Create a secured password as your need</label>
      </div>
      <div className="content-grid">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="content">
          <div className="content-heading">
            <label>Select your Requirements</label>
          </div>
          <br />
          <div className="option">
            <Option
              option={"a b c d e"}
              id="small"
              name="small"
              click={() => {
                setIscheckedsmall(!ischeckedsmall);
              }}
            />
          </div>
          <div className="option">
            <Option
              option="A B C D E"
              id="capital"
              name="capital"
              click={() => {
                setIscheckedcapital(!ischeckedcapital);
              }}
            />
          </div>
          <div className="option">
            <Option
              option="1 2 3 4 5"
              id="numbers"
              name="numbers"
              click={() => {
                setIscheckednumber(!ischeckednumber);
              }}
            />
          </div>
          <div className="option">
            <Option
              option="# % * @ $"
              id="syntax"
              name="syntax"
              click={() => {
                setIscheckedsyntax(!ischeckedsyntax);
              }}
            />
          </div>
          {/* <div className="required-length">
            <label>Enter the number of password you want to generate</label>
          </div> */}
          <div className="input-button-grid">
            <div className="input-field">
              <input
                type="text"
                id="input"
                name="input"
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                }}
                placeholder="Enter the length of password"
                className="input-text"
              />
            </div>
            <div>
              <button
                onClick={() => {
                  sendingData();
                }}
                className="button"
              >
                Generate
              </button>
            </div>
          </div>
          <br />
          <div className="input-button-grid">
            <div className="input-text">
              <label>{output}</label>
            </div>
            <div>
              <button
                onClick={() => navigator.clipboard.writeText(output)}
                className="button"
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
