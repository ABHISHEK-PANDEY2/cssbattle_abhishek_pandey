import { HotKeys, GlobalHotKeys } from "react-hotkeys";
import React, { useEffect, useRef, useState, useCallback } from "react";
import confetti from "canvas-confetti";
const Home = () => {
  const typedString = useRef("");
  const checkString = () => {
    const ans = "cssbattle";
    if (ans === typedString.current) confetti();
    const n = typedString.current.length;
    if (typedString.current[n - 1] != ans[n - 1]) return false;
    return true;
  };

  const updateString = (e) => {
    typedString.current = typedString.current + e;
    const valid = checkString();
    if (!valid) typedString.current = "";
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
        <p className=" text-white text-3xl">Type "cssbattle"</p>
      </GlobalHotKeys>
    </section>
  );
};

export default Home;
