import { useState, useMemo } from 'react';
import ReactConfetti from 'react-confetti';
import styled from 'styled-components';
import Album from './components/Album';
import MusicPlayer from './components/MusicPlayer';
import SpotifyCustomPlayer from './components/Spotify';
import { ConfettiContext } from './context/confetti';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 50px;
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
        { confettiActive && <ReactConfetti /> }
        <Album />
        <MusicPlayer />
        <SpotifyCustomPlayer />
      </AppContainer>
    </ConfettiContext.Provider>
  );
}

export default App;
