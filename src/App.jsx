import { useState, useMemo } from 'react';
import ReactConfetti from 'react-confetti';
import styled from 'styled-components';
import { Fireworks } from '@fireworks-js/react';
import SpotifyCustomPlayer from './components/Spotify';
import Card from './components/Card';
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
  align-items: center;
  position: relative;
  padding: 2em;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.2);
  width: 600px;
  gap: 30px;
  @media (max-width: 1200px) {
    flex-direction: column;
    width: 40vw;
  };
  @media (max-width: 900px) {
    flex-direction: column;
    width: 50vw;
  };
  @media (max-width: 700px) {
    flex-direction: column;
    width: 60vw;
  };
  @media (max-width: 420px) {
    flex-direction: column;
    width: 80vw;
    transform: scale(0.7)
  };
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
        <Fireworks
          options={{
            rocketsPoint: {
              min: 0,
              max: 100,
            },
          }}
          style={{
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            position: 'fixed',
          }}
        />
        <CentralCard>
          { confettiActive && <ReactConfetti /> }
          <Card img={anniversaryImg} targetDate="March 31, 2023 00:00" />
          <SpotifyCustomPlayer />
        </CentralCard>
      </AppContainer>
    </ConfettiContext.Provider>
  );
}

export default App;
