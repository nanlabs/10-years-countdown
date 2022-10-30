import styled from 'styled-components';

const StyledContainer = styled.div`
  line-height: 1.25rem;
  padding: 0 0.75rem 0 0.75rem;
  align-items: center;
  display: flex;
  flex-direction: column;
  color: ${(props) => (props.isDanger ? '#ff0000' : '#000000')};
`;

const StyledValue = styled.p`
    margin: 0;
`;

const StyledType = styled.span`
    text-transform: uppercase;
    font-size: 0.75rem;
    line-height: 1rem;
`;

function TimeDisplay({ value, type, isDanger }) {
  return (
    <StyledContainer isDanger={isDanger}>
      <StyledValue>{value}</StyledValue>
      <StyledType>{type}</StyledType>
    </StyledContainer>
  );
}

export default TimeDisplay;
