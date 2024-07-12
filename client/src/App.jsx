import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services/>
    </div>
  )
}
