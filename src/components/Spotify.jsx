// Create a new component called Spotify that returns allow me to embed a Spotify playlist
import * as Spotify from 'react-spotify-embed';

function SpotifyCustomPlayer() {
  return (
    <Spotify.Spotify link="https://open.spotify.com/playlist/1j6flBxNJC54Jb7AafwuGD?si=d65e948c8f904a35" />
  );
}

export default SpotifyCustomPlayer;
