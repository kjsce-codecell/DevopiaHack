// import Home from './pages/Home/Home'
// import About from './pages/About/About'
// import Prizes from './pages/Prizes/Prizes'
// // import Track from './pages/Track/Track'
// import FAQ from './pages/FAQ/FAQ'
// import Navbar from './components/shared/Navbar/Navbar'
// import Footer from './components/shared/Footer/Footer'
// import Sponsors from './pages/Sponsors/Sponsors'
// import Stats from './pages/Stats/Stats'
import { lazy, Suspense } from 'react'

const Home = lazy(() => import('./pages/Home/Home'))
const About = lazy(() => import('./pages/About/About'))
const Prizes = lazy(() => import('./pages/Prizes/Prizes'))
// const Track = lazy(() => import('./pages/Track/Track'));
const FAQ = lazy(() => import('./pages/FAQ/FAQ'))
const Navbar = lazy(() => import('./components/shared/Navbar/Navbar'))
const Footer = lazy(() => import('./components/shared/Footer/Footer'))
const Sponsors = lazy(() => import('./pages/Sponsors/Sponsors'))
const Stats = lazy(() => import('./pages/Stats/Stats'))

import AOS from 'aos'
import 'aos/dist/aos.css'
import React from 'react'
import Loader from './components/Loader'
import ScrollBar from './components/shared/Scrollbar/Scrollbar'

import { logEvent } from 'firebase/analytics'
import { analytics } from './pages/config/firebase'

function App() {
  logEvent(analytics, 'visit_count')

  const [loading, setLoading] = React.useState(true)
  React.useEffect(() => {
    AOS.init({ once: true })
    AOS.refresh()
    setInterval(() => setLoading(false), 5000)
  }, [])

  if (loading) {
    return <Loader />
  }
  console.log(`
                                               .
     ######æ▄_      ▄▄######   █        ╓▌  _╓«m▌≈╓    ¥#######æ▄   █       ,▄
             ╙█   ▄▀\`           █_     ▄▀  jÜj▄██▄░└╕           ▐▌  █      ▄█▀▌
              ╟▌  █    ╒▌        █▄   █▀   ╠ ▓█████ j  ╔▄▄▄▄▄▄▄æ▀   █     ▄▀  ╙█
             _█"  █▄              ▀▌_█░    |_╙████Ñ £  ╫N           █    █Ñ    └█_
     ▄▄▄▄▄▄▄█▀     ╙▀▄▄▄▄▄▄▄       ╙█       ²%╦║▒µ«^   ╫N           █  ,█"       █▄
                                                ╚
`)

  return (
    <>
      <Suspense fallback={<Loader />}>
        <ScrollBar />
        <Navbar />
        <Home />
        <About />
        <Stats />
        <Prizes />
        {/* <Track /> */}
        <Sponsors />
        <FAQ />
        <Footer />
      </Suspense>
    </>
  )
}

export default App
