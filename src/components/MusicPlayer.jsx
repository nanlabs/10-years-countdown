import RAP from 'react-audio-player';
import song from '../assets/The Final Countdown.mp3';

// vite issue with rollup https://github.com/vitejs/vite/issues/2139
const ReactAudioPlayer = RAP.default ? RAP.default : RAP;

function MusicPlayer() {
  return (
    <ReactAudioPlayer
      src={song}
      controls
      volume={0.7}
    />
  );
}

export default MusicPlayer;
