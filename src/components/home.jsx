import { HotKeys, GlobalHotKeys } from "react-hotkeys";
import React, { useRef, useState } from "react";
import celebrate from "./confetti";
import logosm from "../assets/logo-sm.svg";
import { FaCheckCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";
const Home = () => {
  const typedString = useRef("");
  const [isCorrect, setIsCorrect] = useState();
  const [attempted, setAttempted] = useState();

  const reset = () => {
    setIsCorrect();
    setAttempted(false);
    typedString.current = "";
  };

  const checkString = () => {
    const ans = "cssbattle";
    if (ans === typedString.current) {
      celebrate();
      setAttempted(true);
      setIsCorrect(true);
    }
    const n = typedString.current.length;
    if (n > 9 || typedString.current[n - 1] != ans[n - 1]) {
      setAttempted(true);
      setIsCorrect(false);
      reset();
    }
  };

  const updateString = (e) => {
    typedString.current = typedString.current + e;
    checkString();
  };

  const keymap = {
    C: "c",
    S: "s",
    B: "b",
    A: "a",
    T: "t",
    L: "l",
    E: "e",
    OTHER: [
      "a",
      "d",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "x",
      "y",
      "z",
    ],
  };
  const handlers = {
    C: () => updateString("c"),
    S: () => updateString("s"),
    B: () => updateString("b"),
    A: () => updateString("a"),
    T: () => updateString("t"),
    L: () => updateString("l"),
    E: () => updateString("e"),
    OTHER: () => updateString("-"),
  };
  return (
    <section
      id="wrapper"
      className="w-full h-full flex justify-center items-center"
    >
      <GlobalHotKeys keyMap={keymap} handlers={handlers}>
        <div className="flex flex-col gap-3 items-center justify-center">
          {attempted && isCorrect ? (
            <FaCheckCircle className=" text-4xl w-[100px] text-green-500" />
          ) : (
            <img className="w-[60px]" src={logosm} alt="" />
          )}
          <p className="text-white text-3xl text-center font-bold">
            {attempted && isCorrect
              ? "Congratulations"
              : "Complete The Challenge"}
          </p>
          <p className=" font-mono text-[#cbd1e1] text-2xl text-center">
            Type "
            <span
              className={
                isCorrect === true ? "text-green-500" : " text-yellow-300"
              }
            >
              cssbattle
            </span>
            "
          </p>
          <span className="flex flex-col items-center justify-center gap-1 text-white font-bold text-base">
            {attempted && isCorrect && (
              <>
                <button
                  className="bg-[#323f4a] border rounded-full px-4 py-1"
                  onClick={reset}
                >
                  Play Again
                </button>
              </>
            )}
          </span>
        </div>
      </GlobalHotKeys>
    </section>
  );
};

export default Home;
