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
        <a href={redirect} target="_blank" className="bg-ternaryBlue text-white px-6 py-2 uppercase font-bold text-sm hover:bg-secondaryBlue transition-colors">
          Află mai multe
        </a>
      </div>
    </div>
  );
};
export default PriorityArea;