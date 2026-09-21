import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function TeamPage() {
  return (
    <>
      <title>team</title>
      
      <Header />

      <h2
        style={{
          fontSize: '4rem',
          padding: '150px 0',
          color: 'black',
          fontFamily: "'Cairo', sans-serif",
          textAlign: 'center',
        }}
      >
        قريبا...
      </h2>

      <Footer />
    </>
  );
}