import { useState } from 'react';

import { getToken } from './services/gameService';
import { useGameState } from './hooks/useGameState';
import StartGameForm from './components/StartGame/StartGameForm';
import './App.scss';

function App() {
  const [loading, setLoading] = useState(false);
  const { resetGame } = useGameState();

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
    <>{loading ? 'loading' : <StartGameForm onStartGame={handleStartGame} />}</>
  );
}

export default App;
