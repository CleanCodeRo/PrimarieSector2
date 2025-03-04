import React from 'react';

interface PriorityAreaProps {
  image: string;
  title: string;
  description: string;
  redirect: string;
}

const PriorityArea: React.FC<PriorityAreaProps> = ({ image, title, description, redirect }) => {
  return (
    <div className="flex flex-col">
      <div className="mb-4">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
      </div>
      <h3 className="text-xl font-bold text-white text-center mb-4 italic">{title}</h3>
      <div className="w-full h-px bg-gray-600 mb-8"></div>
      <p className="text-white text-center mb-8">{description}</p>
      <div className="flex justify-center">
        <a href={redirect} target="_blank" className="bg-blue-600 text-white px-6 py-2 uppercase font-bold text-sm hover:bg-blue-700 transition-colors">
          Learn More
        </a>
      </div>
    </div>
  );
};

const PriorityAreas: React.FC = () => {
  const priorityAreas = [
    {
      image: "/images/gis.jpg",
      title: "Harta sector 2",
      description: "Explore Sector 2's interactive GIS map to discover neighborhood information, administrative boundaries, and key locations throughout the district.",
      redirect: "https://sector2.cleancode.ro/"
    },
    {
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "Transportation",
      description: "We're committed to ensuring all residents have easy and affordable access to an efficient, carbon-free transportation network.",
      redirect: "/transportation"
    },
    {
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
      title: "Clean Energy",
      description: "We are expanding our role in the energy transition by supporting regional greening of the grid with new clean infrastructure, on-site generation, and clean energy procurement.",
      redirect: "/clean-energy"
    }
  ];

  return (
    <section id="priority-areas" className="py-16 bg-[#0c1a28]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-12 uppercase">
          Priority Areas
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