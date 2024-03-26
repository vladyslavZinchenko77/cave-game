

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

export const getToken = async (id: string) => {
  const promises = Array.from({ length: 4 }, (_, i) => i + 1).map(async (chunkNo) => {
    const response = await fetch(`${BASE_URL}/token/${chunkNo}?id=${id}`);
    const { chunk } = await response.json();
    return chunk;
  });

  const chunks = await Promise.all(promises);
  return chunks.join('');
};

