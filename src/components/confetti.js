import confetti from "canvas-confetti";

const celebrate = () => {
  confetti({
    spread: 360,
    particleCount: 300,
  });
};

export default celebrate;
