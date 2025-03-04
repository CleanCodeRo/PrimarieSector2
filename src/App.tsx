import React from 'react';
import { Menu, X, ChevronRight, ArrowRight, Leaf, Home, Building2, Droplets, Wind, Users, BookOpen } from 'lucide-react';
import HeroSection from './components/HeroSection';
import PriorityAreas from './components/PriorityAreas';
import Footer from './components/Footer';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Leaf className="h-8 w-8 mr-2" />
              <span className="font-bold text-xl">Boston's Green New Deal</span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700">Home</a>
              <a href="#priority-areas" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700">Priority Areas</a>
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700">About</a>
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700">Get Involved</a>
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700">Resources</a>
            </div>
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-green-700 focus:outline-none"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700">Home</a>
              <a href="#priority-areas" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700">Priority Areas</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700">About</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700">Get Involved</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700">Resources</a>
            </div>
          </div>
        )}
      </nav>

      <main>
        <HeroSection />
        <PriorityAreas />
        
        {/* Call to Action */}
        <section className="bg-green-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Us in Building a Greener Boston</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">Together, we can create a more sustainable, equitable, and resilient city for current and future generations.</p>
            <button className="bg-white text-green-800 font-bold py-3 px-8 rounded-full inline-flex items-center hover:bg-gray-100 transition-colors">
              Get Involved
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;