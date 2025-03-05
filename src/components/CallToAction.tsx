import { ArrowRight } from "lucide-react";

const CallToACtion=()=>{

return(<section className="bg-white text-primaryBlue py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
  <h2 className="text-3xl font-bold mb-6">Alătură-te efortului de a crea un sector mai verde!</h2>
  <p className="text-xl mb-8 max-w-3xl mx-auto">Împreună, putem crea un oraș mai sustenabil, echitabil, și durabil pentru generațiile curente si viitoare.</p>
  <button className="bg-ternaryBlue text-white font-bold py-3 px-8 rounded-full inline-flex items-center hover:bg-secondaryBlue transition-colors">
    Implică-te!
    <ArrowRight className="ml-2 h-5 w-5" />
  </button>
</div>
</section>
)
};
export default CallToACtion;