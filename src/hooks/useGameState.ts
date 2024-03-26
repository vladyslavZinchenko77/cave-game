import { useState } from 'react';

export const useGameState = () => {
  const [horizontalSpeed, setHorizontalSpeed] = useState(0);
  const [verticalSpeed, setVerticalSpeed] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  const resetGame = () => {
    setHorizontalSpeed(0);
    setVerticalSpeed(0);
    setScore(0);
    setGameOver(false);
    setGameWon(false);
  };

  return {
    horizontalSpeed,
    setHorizontalSpeed,
    verticalSpeed,
    setVerticalSpeed,
    score,
    setScore,
    gameOver,
    setGameOver,
    gameWon,
    setGameWon,
    resetGame,
  };
};