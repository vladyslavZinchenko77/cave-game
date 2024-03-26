const BASE_URL = 'https://cave-drone-server.shtoa.xyz';

export const initGame = async (name: string, complexity: number) => {
    const response = await fetch(`${BASE_URL}/init`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, complexity }),
    });
  
    if (!response.ok) {
      throw new Error('Failed to initialize game');
    }
  
    const { id } = await response.json();
    return id;
  };