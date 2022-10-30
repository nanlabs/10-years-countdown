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
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 200px;
  filter: ${(props) => (props.disabled ? 'grayscale(1)' : 'none')};
`;

function Card({
  img,
  name,
  targetDate,
}) {
  const [cardDisabled, setCardDisabled] = useState(false);
  return (
    <StyledContainer>
      <StyledImg disabled={cardDisabled} src={img} alt="card-img" />
      <h2>{name}</h2>
      {(targetDate && !cardDisabled) && (
      <Countdown targetDate={targetDate} onFinish={() => setCardDisabled(true)} />)}
    </StyledContainer>
  );
}

export default Card;
