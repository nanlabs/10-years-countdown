import { useWindowSize } from 'react-use';
import ReactConfetti from 'react-confetti';

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
