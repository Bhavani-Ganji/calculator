import React, { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("0");
  const [prevValue, setPrevValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const numberClick = (num) => {
    if (waitingForOperand || display === "0") {
      setDisplay(num);
      setWaitingForOperand(false);
    } else {
      setDisplay((prev) => prev + num);
    }
  };

  const operatorClick = (op) => {
    if (operator !== null) {
      calculateResult();
      setPrevValue(display);
    } else {
      setPrevValue(display);
    }

    setOperator(op);
    setWaitingForOperand(true);
  };

  const calculateResult = () => {
    const prev = parseFloat(prevValue);
    const current = parseFloat(display);
    let result;

    switch (operator) {
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev - current;
        break;
      case "*":
        result = prev * current;
        break;
      case "/":
        result = prev / current;
        break;
      default:
        return;
    }

    setDisplay(result.toString());
  };

  const equalClick = () => {
    if (operator !== null) {
      calculateResult();
      setOperator(null);
      setPrevValue(null);
      setWaitingForOperand(true);
    }
  };

  const clearClick = () => {
    setDisplay("0");
    setPrevValue(null);
    setOperator(null);
    setWaitingForOperand(false);
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <button onClick={() => numberClick("7")}>7</button>
        <button onClick={() => numberClick("8")}>8</button>
        <button onClick={() => numberClick("9")}>9</button>
        <button onClick={() => operatorClick("/")} >/</button>
        <button onClick={() => numberClick("4")}>4</button>
        <button onClick={() => numberClick("5")}>5</button>
        <button onClick={() => numberClick("6")}>6</button>
        <button onClick={() => operatorClick("*")}>*</button>
        <button onClick={() => numberClick("1")}>1</button>
        <button onClick={() => numberClick("2")}>2</button>
        <button onClick={() => numberClick("3")}>3</button>
        <button onClick={() => operatorClick("-")}>-</button>
        <button onClick={() => numberClick("0")}>0</button>
        <button onClick={() => operatorClick(".")} >.</button>
        <button onClick={equalClick}>=</button>
        <button onClick={() => operatorClick("+")}>+</button>
        <button onClick={clearClick}>C</button>
      </div>
    </div>
  );
}

export default App;



// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [calcState, setCalcState] = useState({
//     display: "0",
//     prevValue: null,
//     operator: null,
//     waitingForOperand: false,
//   });

//   const numberClick = (num) => {
//     setCalcState((prevState) => ({
//       ...prevState,
//       display:
//         prevState.waitingForOperand || prevState.display === "0"
//           ? num
//                                   : prevState.display + num,
//       waitingForOperand: false,
//     }));
//   };

//   const operatorClick = (op) => {
//     setCalcState((prevState) => ({
//       ...prevState,
//       operator: op,
//       prevValue: prevState.display,
//       waitingForOperand: true,
//       display: prevState.display + op,
//     }));
//   };

//   const calculateResult = () => {
//     const { prevValue, operator, display } = calcState;
//     const prev = parseFloat(prevValue);
//     const current = parseFloat(display);
//     let result;

//     switch (operator) {
//       case "+":
//         result = prev + current;
//         break;
//       case "-":
//         result = prev - current;
//         break;
//       case "*":
//         result = prev * current;
//         break;
//       case "/":
//         result = prev / current;
//         break;
//       default:
//         return;
//     }

//     setCalcState((prevState) => ({
//       ...prevState,
//       display: result.toString(),
//       prevValue: null,
//       operator: null,
//       waitingForOperand: true,
//     }));
//   };

//   const equalClick = () => {
//     if (calcState.operator !== null && !calcState.waitingForOperand) {
//       calculateResult();
//     }
//   };

//   const clearClick = () => {
//     setCalcState({
//       display: "0",
//       prevValue: null,
//       operator: null,
//       waitingForOperand: false,
//     });
//   };

//   return (
//     <div className="calculator">
//       <div className="display">{calcState.display}</div>
//       <div className="buttons">
//         <button onClick={() => numberClick("7")}>7</button>
//         <button onClick={() => numberClick("8")}>8</button>
//         <button onClick={() => numberClick("9")}>9</button>
//         <button onClick={() => operatorClick("/")} >/</button>
//         <button onClick={() => numberClick("4")}>4</button>
//         <button onClick={() => numberClick("5")}>5</button>
//         <button onClick={() => numberClick("6")}>6</button>
//         <button onClick={() => operatorClick("*")}>*</button>
//         <button onClick={() => numberClick("1")}>1</button>
//         <button onClick={() => numberClick("2")}>2</button>
//         <button onClick={() => numberClick("3")}>3</button>
//         <button onClick={() => operatorClick("-")}>-</button>
//         <button onClick={() => numberClick("0")}>0</button>
//         <button onClick={() => operatorClick(".")}>.</button>
//         <button onClick={equalClick}>=</button>
//         <button onClick={() => operatorClick("+")}>+</button>
//         <button onClick={clearClick}>C</button>
//       </div>
//     </div>
//   );
// }

// export default App;
