import styled from 'styled-components';
import Card from './Card';
import PompiImg from '../assets/Pompi.jpg';
import MatiImg from '../assets/Mati.jpg';
import AlanImg from '../assets/Alan.jpg';
import NahueImg from '../assets/Nahue.jpg';
import AleImg from '../assets/Ale.jpg';
import ChibiImg from '../assets/Chibi.jpg';
import AdanImg from '../assets/Adan.jpg';

const StyledGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 40px;
  grid-gap: 150px;
`;

function App() {
  return (
    <StyledGrid>
      <Card name="Alan" img={AlanImg} targetDate="December 14, 2022 23:59" />
      <Card name="Chibi" img={ChibiImg} targetDate="December 14, 2022 23:59" />
      <Card name="Mati" img={MatiImg} targetDate="November 11, 2022 23:59" />
      <Card name="Pompi" img={PompiImg} targetDate="December 14, 2022 23:59" />
      <Card name="Ale" img={AleImg} />
      <Card name="Nahue" img={NahueImg} targetDate="November 11, 2022 23:59" />
      <Card name="Adan" img={AdanImg} />
    </StyledGrid>
  );
}

export default App;
