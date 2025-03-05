import React from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import HeroSection from './components/HeroSection';
import PriorityAreas from './components/PriorityAreas';
import Footer from './components/Footer';
import CallToAction from './components/CallToAction';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-secondaryBlue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Leaf className="h-8 w-8 mr-2" />
              <span className="font-bold text-xl">Proiectele Primăriei Serctor 2</span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primaryBlue">Acasă</a>
              <a href="#priority-areas" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primaryBlue">Proiecte</a>
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primaryBlue">Despre</a>
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primaryBlue">Implică-te</a>
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primaryBlue">Resurse</a>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-primaryBlue focus:outline-none"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primaryBlue">Acasă</a>
              <a href="#priority-areas" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primaryBlue">Proiecte</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primaryBlue">Despre</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primaryBlue">Implică-te</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primaryBlue">Resurse</a>
            </div>
          </div>
        )}
      </nav>

      <main>
        <HeroSection />
        <PriorityAreas />
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
}

export default App;