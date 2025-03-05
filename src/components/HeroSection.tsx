import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-green-800 text-white">
      <div
        className="absolute inset-0 z-0 opacity-30 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1470058869958-2a77ade41c02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Proiecte Sector 2</h1>
          <p className="text-xl md:text-2xl mb-8">
            Construim un sector mai sănătos, durabil și echitabil pentru viitoarele generații.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-green-800 font-bold py-3 px-8 rounded-full inline-flex items-center hover:bg-gray-100 transition-colors">
              Află mai multe
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full inline-flex items-center hover:bg-white hover:bg-opacity-10 transition-colors">
              Vezi prezentare video
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;