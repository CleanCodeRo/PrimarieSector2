import React from 'react';
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primaryBlue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Leaf className="h-8 w-8 mr-2 text-ternaryBlue" />
              <span className="font-bold text-xl">Proiectele Primăriei Sector 2</span>
            </div>
            <p className="text-gray-400 mb-4">
              Construim un sector mai sănătos, durabil și echitabil pentru viitoarele generații.
            </p>
            <div className="flex space-x-4">
              <a target="_blank" href="https://www.facebook.com/PrimariaSector2/" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a target="_blank" href="https://twitter.com/primariesector2" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a target="_blank" href="https://www.instagram.com/primariesector2" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a target="_blank" href="https://www.youtube.com/c/primariasectorului2bucuresti" className="text-gray-400 hover:text-white">
                <Youtube className="h-5 w-5" />
              </a>
              <a target="_blank" href="https://www.linkedin.com/company/prim%C4%83ria-sectorului-2/" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Link-uri rapide</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Acasă</a></li>
              <li><a href="#priority-areas" className="text-gray-400 hover:text-white">Proiecte</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Despre</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Implică-te</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Resurse</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Priority Areas</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Clădiri</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Energie</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Apă și climă</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Locuințe și teren</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Economie</a></li>
            </ul>
          </div>
            <div>
            <h3 className="text-lg font-semibold mb-4">Contactează-ne</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-ternaryBlue" />
                <span className="text-gray-400">Centrul de Relaţii cu Publicul, Str. Chiristigiilor nr. 11-13</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-ternaryBlue" />
                <span className="text-gray-400">031.4039961; 0372.106100; 021/252.96.71</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-ternaryBlue" />
                <span className="text-gray-400">021.2096000; (<a target="_blank" href="https://ps2.ro/images/2025/VIIS/2025-02-28_VIIS-web.jpg">Structura Sistemului Vocal</a>);</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-ternaryBlue" />
                <span className="text-gray-400">infopublice@ps2.ro</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Primăria Sectorului 2 București.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;