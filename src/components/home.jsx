import { GlobalHotKeys } from "react-hotkeys";
import React, { useState } from "react";
import celebrate from "./confetti";
import logosm from "../assets/logo-sm.svg";
import { FaCheckCircle } from "react-icons/fa";
const Home = () => {
  const [isCorrect, setIsCorrect] = useState();
  const [attempted, setAttempted] = useState();

  const reset = () => {
    setIsCorrect();
    setAttempted(false);
  };

  const checkString = (string) => {
    const ans = "cssbattle";
    if (string === ans) {
      celebrate();
      setAttempted(true);
      setIsCorrect(true);
    } else {
      setAttempted(true);
      setIsCorrect(false);
      reset();
    }
  };

  const keymap = {
    CSSBATTLE: "c s s b a t t l e",
  };
  const handlers = {
    CSSBATTLE: () => checkString("cssbattle"),
  };
  return (
    <section
      id="wrapper"
      className="w-full flex justify-center items-center grow"
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
