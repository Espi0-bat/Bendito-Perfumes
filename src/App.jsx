import './styles/global.css';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { SignatureCollection } from './components/sections/SignatureCollection';
import { ScentProfileMap } from './components/sections/ScentProfileMap';
import { TheExperience } from './components/sections/TheExperience';
import { Conciergerie } from './components/sections/Conciergerie';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsApp } from './components/ui/FloatingWhatsApp';

export default function App() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <SignatureCollection />
      <ScentProfileMap />
      <TheExperience />
      <Conciergerie />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
