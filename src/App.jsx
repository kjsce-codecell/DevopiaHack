import Home from './pages/Home/Home'
import About from './pages/About/About'
import Prizes from './pages/Prizes/Prizes'
import Track from './pages/Track/Track'
import FAQ from './pages/FAQ/FAQ'
import Navbar from './components/shared/Navbar/Navbar'
import Footer from './components/shared/Footer/Footer'
import Sponsors from './pages/Sponsors/Sponsors'
import Stats from './pages/Stats/Stats'
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Stats />
      <Prizes />
      <Track />
      <Sponsors />
      <FAQ />
      <Footer />
    </>
  )
}

export default App
