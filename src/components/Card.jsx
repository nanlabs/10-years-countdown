import { useState } from 'react';
import styled from 'styled-components';
import Countdown from './Counter';

const StyledContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
`;

const StyledImg = styled.img`
  width: 200px;
`;

function Card({
  img,
  targetDate,
}) {
  const [cardDisabled, setCardDisabled] = useState(false);
  return (
    <StyledContainer>
      <StyledImg disabled={cardDisabled} src={img} alt="card-img" />
      {(targetDate && !cardDisabled) && (
      <Countdown targetDate={targetDate} onFinish={() => setCardDisabled(true)} />)}
    </StyledContainer>
  );
}

export default Card;
