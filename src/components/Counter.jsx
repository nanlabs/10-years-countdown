import styled from 'styled-components';
import { useContext, useEffect } from 'react';
import useCountdown from '../hooks/useCountdown';
import TimeDisplay from './TimeDisplay';
import { ConfettiContext } from '../context/confetti';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.75rem;
  padding: 0.5rem;
  border: 1px solid #ebebeb;
  border-radius: 0.25rem;
  text-decoration: none;
  color: #000;
`;

function Countdown({ targetDate, onFinish }) {
  const {
    days,
    hours,
    minutes,
    seconds,
    milliseconds,
  } = useCountdown(targetDate);
  const { setConfettiActive } = useContext(ConfettiContext);

  useEffect(() => {
    if (milliseconds < 0) {
      setConfettiActive(false);
      onFinish();
    }
    if (days === 0 && milliseconds > 0) {
      setConfettiActive(true);
    }
  }, [days, milliseconds]);

  return (
    <StyledContainer>
      <TimeDisplay value={days} type="Days" isDanger={days <= 3} />
      <TimeDisplay value={hours} type="Hours" isDanger={false} />
      <TimeDisplay value={minutes} type="Mins" isDanger={false} />
      <TimeDisplay value={seconds} type="Seconds" isDanger={false} />
    </StyledContainer>
  );
}

export default Countdown;
