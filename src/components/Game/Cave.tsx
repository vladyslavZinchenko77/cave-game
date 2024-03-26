import { FC, useEffect, useRef } from 'react';

interface CaveProps {
  caveData: Array<[number, number]>;
  wallHeight: number;
}

const Cave: FC<CaveProps> = ({ caveData, wallHeight }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    if (canvas && ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();
      ctx.moveTo(0, canvas.height);
      caveData.forEach(([left, right]) => {
        ctx.lineTo(left, canvas.height - wallHeight);
        ctx.lineTo(right, canvas.height - wallHeight);
      });
      ctx.lineTo(canvas.width, canvas.height);
      ctx.closePath();
      ctx.fill();
    }
  }, [caveData, wallHeight]);

  return <canvas ref={canvasRef} width={500} height={500} />;
};

export default Cave;
