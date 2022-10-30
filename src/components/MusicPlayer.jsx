import ReactAudioPlayer from 'react-audio-player';
import song from '../assets/The Final Countdown.mp3';

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
