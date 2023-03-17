import { useState, useMemo } from 'react';
import ReactConfetti from 'react-confetti';
import styled from 'styled-components';
import SpotifyCustomPlayer from './components/Spotify';
import { ConfettiContext } from './context/confetti';
import bgImg from './assets/bg.svg';
import anniversaryImg from './assets/anniversary.svg';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 50px;
  height: 100vh;
  width: 100vw;
  background: url(${bgImg}) no-repeat center center fixed;
  background-size: cover;
`;

const CentralCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: relative;
  padding: 2em;
  background: #ffffff50;
  border-radius: 10px;
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.2);
  width: 800px;
  backdrop-filter: blur(10px);
`;

const StyledImg = styled.img`
  width: 200px;
`;

function App() {
  const [confettiActive, setConfettiActive] = useState(false);

  const contextValue = useMemo(
    () => ({ confettiActive, setConfettiActive }),
    [confettiActive, setConfettiActive],
  );

  return (
    <ConfettiContext.Provider value={contextValue}>
      <AppContainer>
        <CentralCard>
          { confettiActive && <ReactConfetti /> }
          <StyledImg src={anniversaryImg} alt="anniversary" />
          <SpotifyCustomPlayer />
        </CentralCard>
      </AppContainer>
    </ConfettiContext.Provider>
  );
}

export default App;
