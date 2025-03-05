import React from 'react';
import PriorityArea from './ProiorityArea';

const PriorityAreas: React.FC = () => {
  const priorityAreas = [
    {
      image: "/images/gis.jpg",
      title: "Harta sector 2",
      description: "Explorați harta GIS interactivă a Sectorului 2 pentru a descoperi informații despre cartiere, limite administrative și locații cheie din district.",
      redirect: "https://sector2.cleancode.ro/"
    },
    {
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "Transport",
      description: "Ne angajăm să ne asigurăm că toți rezidenții au acces ușor și accesibil la o rețea de transport eficientă, fără emisii de carbon. ",
      redirect: "/transportation"
    },
    {
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
      title: "Energie curată",
      description: "Ne extindem rolul în tranziția energetică prin sprijinirea ecologizării regionale a rețelei cu o nouă infrastructură curată, generare la fața locului și achiziție de energie curată.",
      redirect: "/clean-energy"
    }
  ];

  return (
    <section id="priority-areas" className="py-16 bg-primaryBlue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-12 uppercase">
          Proiecte în desfășurare
          <div className="h-1 bg-white w-full mt-2"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {priorityAreas.map((area, index) => (
            <PriorityArea
              key={index}
              image={area.image}
              title={area.title}
              description={area.description}
              redirect={area.redirect}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriorityAreas;