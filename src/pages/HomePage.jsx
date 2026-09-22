import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import './HomePage.css';
import Matches from '../components/Matches';
import Standings from '../components/Standings';
import Squad from '../components/Squad';
import History from '../components/History';


export function HomePage() {
  return (
    <>
      <title>USMOUJDA</title>

      < Header />

      < Hero />

      <Matches />

      <Standings />

      <Squad />

      <History />

      <Footer />
    </>
  );
}