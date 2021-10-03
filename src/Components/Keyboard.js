import { KeyboardGrid, Key } from "./Styles/Keyboard.styled.js";

export default function Keyboard({ setResult, result }) {
  function handleClick(value) {
    if (result === "Infinity" || result === "NaN") {
      setResult("");
      return;
    }
    if (!["del", "RESET", "="].includes(value)) {
      setResult(result.concat(value));
      return;
    } else {
      switch (value) {
        case "del":
          setResult(() => {
            try {
              // eslint-disable-next-line no-eval
              return result.slice(0, result.length - 1);
            } catch (error) {
              setResult("");
            }
          });
          break;
        case "RESET":
          setResult("");
          break;
        case "=":
          setResult(() => {
            try {
              // eslint-disable-next-line no-eval
              return eval(result) + "";
            } catch (error) {
              setResult("");
            }
          });
          break;
        default:
          break;
      }
    }
    return;
  }

  return (
    <KeyboardGrid>
      <Key
        typeKey={"commonKeys"}
        onClick={(e) => {
          e.preventDefault();
          return handleClick(7);
        }}
      >
        7
      </Key>
      <Key
        typeKey={"commonKeys"}
        onClick={(e) => {
          e.preventDefault();
          return handleClick(8);
        }}
      >
        8
      </Key>
      <Key
        typeKey={"commonKeys"}
        onClick={(e) => {
          e.preventDefault();
          return handleClick(9);
        }}
      >
        9
      </Key>
      <Key
        typeKey={"resetDel"}
        isDel={true}
        onClick={(e) => {
          e.preventDefault();
          return handleClick("del");
        }}
      >
        DEL
      </Key>
      <Key
        typeKey={"commonKeys"}
        onClick={(e) => {
          e.preventDefault();
          return handleClick(4);
        }}
      >
        4
      </Key>
      <Key
        typeKey={"commonKeys"}
        onClick={(e) => {
          e.preventDefault();
          return handleClick(5);
        }}
      >
        5
      </Key>
      <Key
        typeKey={"commonKeys"}
        onClick={(e) => {
          e.preventDefault();
          return handleClick(6);
        }}
      >
        6
      </Key>
      <Key
        typeKey={"commonKeys"}
        onClick={(e) => {
          e.preventDefault();
          return handleClick("+");
        }}
      >
        +
      </Key>
      <Key
        typeKey={"commonKeys"}
        onClick={(e) => {
          e.preventDefault();
          return handleClick(1);
        }}
      >
        1
      </Key>
      <Key
        typeKey={"commonKeys"}
        onClick={(e) => {
          e.preventDefault();
          return handleClick(2);
        }}
      >
        2
      </Key>
      <Key
        typeKey={"commonKeys"}
        onClick={(e) => {
          e.preventDefault();
          return handleClick(3);
        }}
      >
        3
      </Key>
      <Key
        typeKey={"commonKeys"}
        onClick={(e) => {
          e.preventDefault();
          return handleClick("-");
        }}
      >
        -
      </Key>
      <Key
        typeKey={"commonKeys"}
        onClick={(e) => {
          e.preventDefault();
          return handleClick(".");
        }}
      >
        .
      </Key>
      <Key
        typeKey={"commonKeys"}
        onClick={(e) => {
          e.preventDefault();
          return handleClick(0);
        }}
      >
        0
      </Key>
      <Key
        typeKey={"commonKeys"}
        onClick={(e) => {
          e.preventDefault();
          return handleClick("/");
        }}
      >
        /
      </Key>
      <Key
        typeKey={"commonKeys"}
        onClick={(e) => {
          e.preventDefault();
          return handleClick("x");
        }}
      >
        X
      </Key>
      <Key
        typeKey={"resetDel"}
        onClick={(e) => {
          e.preventDefault();
          return handleClick("RESET");
        }}
      >
        RESET
      </Key>
      <Key
        typeKey={"equal"}
        onClick={(e) => {
          e.preventDefault();
          return handleClick("=");
        }}
      >
        =
      </Key>
    </KeyboardGrid>
  );
}
