import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [operator, setOperator] = useState(null);
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [result, setResult] = useState(null);
  const [decimalEntered, setDecimalEntered] = useState(false);

  const handleOperation = () => {
    if (result !== null && operator) {
      if (operator === "+") {
        setResult(Number(result) + Number(num2));
      } else if (operator === "-") {
        setResult(Number(result) - Number(num2));
      } else if (operator === "x") {
        setResult(Number(result) * Number(num2));
      } else if (operator === "/" && num2 !== 0) {
        setResult(Number(result) / Number(num2));
      }
      setNum1(null);
      setNum2(null);
      setOperator(null);
    } else if (num1 !== null && num2 !== null && operator) {
      if (operator === "+") {
        setResult(Number(num1) + Number(num2));
      } else if (operator === "-") {
        setResult(Number(num1) - Number(num2));
      } else if (operator === "x") {
        setResult(Number(num1) * Number(num2));
      } else if (operator === "/" && num2 !== 0) {
        setResult(Number(num1) / Number(num2));
      }
      setNum1(null);
      setNum2(null);
      setOperator(null);
    }
  };

  const handleClear = () => {
    setOperator(null);
    setNum1(null);
    setNum2(null);
    setResult(null);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-00">
      <div className="bg-transparent  border border-purple-400 px-6 pb-5 pt-2 rounded-2xl p shadow-2xl shadow-purple-500">
        <div className="flex justify-between px-3">
          {" "}
          <div className="mt-4 mb-7 text-5xl font-semibold text-white min-h-[10px]">
            {result ? result : "0"}
          </div>
          <div className="mt-4 mb-7 text-5xl font-semibold text-white min-h-[10px]">
            {num1}{" "}
            {operator === "/"
              ? String.fromCharCode(247)
              : operator === "x"
              ? "\u00D7"
              : operator === "-"
              ? "\u2212"
              : operator === "+"
              ? "\u002B"
              : operator}{" "}
            {num2}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-4 ">
          <button
            onClick={() => {
              if (num1 || result) {
                setOperator("+");
              }
            }}
            className="text-3xl font-extrabold text-white bg-orange-400 rounded-full p-2 w-[65px] h-[65px]"
          >
            &#43;
          </button>
          <button
            onClick={() => {
              if (result) {
                if (operator) {
                  setNum2((prev) => (prev ? `${prev}7` : "7"));
                }
              } else if (!operator) {
                setNum1((prev) => (prev ? `${prev}7` : "7"));
              } else {
                setNum2((prev) => (prev ? `${prev}7` : "7"));
              }
              setDecimalEntered(false);
            }}
            className="text-2xl font-extrabold text-white bg-gray-800 rounded-full p-2 w-[65px] h-[65px]"
          >
            7
          </button>
          <button
            onClick={() => {
              if (result) {
                if (operator) {
                  setNum2((prev) => (prev ? `${prev}8` : "8"));
                }
              } else if (!operator) {
                setNum1((prev) => (prev ? `${prev}8` : "8"));
              } else {
                setNum2((prev) => (prev ? `${prev}8` : "8"));
              }
              setDecimalEntered(false);
            }}
            className="text-2xl font-extrabold text-white bg-gray-800 rounded-full p-2 w-[65px] h-[65px]"
          >
            8
          </button>
          <button
            onClick={() => {
              if (result) {
                if (operator) {
                  setNum2((prev) => (prev ? `${prev}9` : "9"));
                }
              } else if (!operator) {
                setNum1((prev) => (prev ? `${prev}9` : "9"));
              } else {
                setNum2((prev) => (prev ? `${prev}9` : "9"));
              }
              setDecimalEntered(false);
            }}
            className="text-2xl font-extrabold text-white bg-gray-800 rounded-full p-2 w-[65px] h-[65px]"
          >
            9
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-4">
          <button
            onClick={() => {
              if (num1 || result) {
                setOperator("-");
              }
            }}
            className="text-3xl font-extrabold text-white bg-orange-400 rounded-full p-2 w-[65px] h-[65px]"
          >
            &#8722;
          </button>
          <button
            onClick={() => {
              if (result) {
                if (operator) {
                  setNum2((prev) => (prev ? `${prev}4` : "4"));
                }
              } else if (!operator) {
                setNum1((prev) => (prev ? `${prev}4` : "4"));
              } else {
                setNum2((prev) => (prev ? `${prev}4` : "4"));
              }
              setDecimalEntered(false);
            }}
            className="text-2xl font-extrabold text-white bg-gray-800 rounded-full p-2 w-[65px] h-[65px]"
          >
            4
          </button>
          <button
            onClick={() => {
              if (result) {
                if (operator) {
                  setNum2((prev) => (prev ? `${prev}5` : "5"));
                }
              } else if (!operator) {
                setNum1((prev) => (prev ? `${prev}5` : "5"));
              } else {
                setNum2((prev) => (prev ? `${prev}5` : "5"));
              }
              setDecimalEntered(false);
            }}
            className="text-2xl font-extrabold text-white bg-gray-800 rounded-full p-2 w-[65px] h-[65px]"
          >
            5
          </button>
          <button
            onClick={() => {
              if (result) {
                if (operator) {
                  setNum2((prev) => (prev ? `${prev}6` : "6"));
                }
              } else if (!operator) {
                setNum1((prev) => (prev ? `${prev}6` : "6"));
              } else {
                setNum2((prev) => (prev ? `${prev}6` : "6"));
              }
              setDecimalEntered(false);
            }}
            className="text-2xl font-extrabold text-white bg-gray-800 rounded-full p-2 w-[65px] h-[65px]"
          >
            6
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-4">
          <button
            onClick={() => {
              if (num1 || result) {
                setOperator("x");
              }
            }}
            className="text-3xl font-extrabold text-white bg-orange-400 rounded-full p-2 w-[65px] h-[65px]"
          >
            &times;
          </button>
          <button
            onClick={() => {
              if (result) {
                if (operator) {
                  setNum2((prev) => (prev ? `${prev}1` : "1"));
                }
              } else if (!operator) {
                setNum1((prev) => (prev ? `${prev}1` : "1"));
              } else {
                setNum2((prev) => (prev ? `${prev}1` : "1"));
              }
              setDecimalEntered(false);
            }}
            className="text-2xl font-extrabold text-white bg-gray-800 rounded-full p-2 w-[65px] h-[65px]"
          >
            1
          </button>
          <button
            onClick={() => {
              if (result) {
                if (operator) {
                  setNum2((prev) => (prev ? `${prev}2` : "2"));
                }
              } else if (!operator) {
                setNum1((prev) => (prev ? `${prev}2` : "2"));
              } else {
                setNum2((prev) => (prev ? `${prev}2` : "2"));
              }
              setDecimalEntered(false);
            }}
            className="text-2xl font-extrabold text-white bg-gray-800 rounded-full p-2 w-[65px] h-[65px]"
          >
            2
          </button>
          <button
            onClick={() => {
              if (result) {
                if (operator) {
                  setNum2((prev) => (prev ? `${prev}3` : "3"));
                }
              } else if (!operator) {
                setNum1((prev) => (prev ? `${prev}3` : "3"));
              } else {
                setNum2((prev) => (prev ? `${prev}3` : "3"));
              }
              setDecimalEntered(false);
            }}
            className="text-2xl font-extrabold text-white bg-gray-800 rounded-full p-2 w-[65px] h-[65px]"
          >
            3
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-4">
          <button
            onClick={() => {
              if (num1 || result) {
                setOperator("/");
              }
            }}
            className="text-3xl font-extrabold text-white bg-orange-400 rounded-full p-2 w-[65px] h-[65px]"
          >
            &divide;
          </button>
          <button
            onClick={() => {
              if (result) {
                if (operator) {
                  setNum2((prev) => (prev ? `${prev}0` : "0"));
                }
              } else if (!operator) {
                setNum1((prev) => (prev ? `${prev}0` : "0"));
              } else {
                setNum2((prev) => (prev ? `${prev}0` : "0"));
              }
              setDecimalEntered(false);
            }}
            className="text-2xl font-extrabold text-white bg-gray-800 rounded-full p-2 w-[65px] h-[65px]"
          >
            0
          </button>

          <button
            onClick={() => {
              if (!decimalEntered) {
                if (result) {
                  if (operator) {
                    setNum2((prev) => (prev ? `${prev}.` : "0."));
                  }
                } else if (!operator) {
                  setNum1((prev) => (prev ? `${prev}.` : "0."));
                } else {
                  setNum2((prev) => (prev ? `${prev}.` : "0."));
                }
                setDecimalEntered(true);
              }
            }}
            className="text-2xl font-extrabold text-white bg-gray-800 rounded-full p-2 w-[65px] h-[65px]"
          >
            .
          </button>

          <button
            onClick={handleOperation}
            className="text-2xl font-extrabold text-white bg-gray-800 rounded-full p-2 w-[65px] h-[65px]"
          >
            =
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-4">
          <button
            onClick={handleClear}
            className="text-2xl font-semibold text-white bg-red-600 rounded-full p-2 w-[65px] h-[65px]"
          >
            C
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
