import { useWindowSize } from 'react-use';
import RC from 'react-confetti';

// vite issue with rollup https://github.com/vitejs/vite/issues/2139
const ReactConfetti = RC.default ? RC.default : RC;

function Confetti() {
  const { width, height } = useWindowSize();
  return (
    <ReactConfetti
      width={width}
      height={height}
    />
  );
}

export default Confetti;
