import { useState } from 'react';
import { getToken } from './services/gameService';
import { useGameState } from './hooks/useGameState';

import LoadingIndicator from './components/LoadingIndicator/LoadingIndicator';
import StartGameForm from './components/StartGame/StartGameForm';
import Cave from './components/Game/Cave';
import './App.scss';

function App() {
  const [loading, setLoading] = useState(false);
  const { resetGame } = useGameState();

  // для теста
  const caveData: [number, number][] = [
    [100, -200],
    [300, -400],
    [-500, 600],
  ];

  // для теста
  const wallHeight = 500;

  const handleStartGame = async (id: string) => {
    setLoading(true);
    resetGame();

    try {
      const token = await getToken(id);
    } catch (error) {
      console.error('Failed to start game:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <Cave wallHeight={wallHeight} caveData={caveData} />
      )}
      <StartGameForm onStartGame={handleStartGame} />
    </>
  );
}

export default App;
