import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      <style>{`
        html {
          scroll-behavior: smooth;
          font-size: 16px;
        }

        @media (max-width: 640px) {
          html {
            font-size: 14px;
          }
        }

        body {
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        * {
          -webkit-tap-highlight-color: transparent;
        }
      `}</style>

      <Header />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}