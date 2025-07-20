import './App.css';
import { Navbar } from './navbar';
import { Hero } from './hero';
import { About } from './about';
import { Skills } from './skills';
import { Customer } from './customer';
import { Resume } from './resume';
import { Services } from './services';
import { Testimonials } from './testimonials';
import { Projects } from './projects.';
import { Contact } from './contact';
import { Footer } from './footer';

function App() {
  return (
    <div className="flex md:ml-64">
      <Navbar />
      <main className="flex-1 overflow-y-auto">
        {/* All content scrolls down here */}
        <Hero />
        <About />
        <Customer/>
        <Skills/>
        <Resume/>
        <Services/>
        <Testimonials/>
        <Projects/>
        <Contact/>
        <Footer/>
        {/* Add more sections here */}
      </main>
    </div>
  );
}

export default App;
