import { Calendar, Heart, MapPin } from "lucide-react";

export const VictimCard = ({victim,index}) => {
    const [day, month, year] = victim.date.split('-');  
    const date = new Date(year, month - 1, day);

    function formatLocation(city, province) {

      if (city === null && province === null) {
        return "Unknown";
      }

      if (city === null && province !== null) {
        return province;
      }

      if (province === null && city !== null) {
        return city;
      }

      return `${city}, ${province}`;
  }

    return (
        <div 
                  key={victim._id}
                  className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-pink-300/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  {/* Rose decoration */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center shadow-lg">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  
                  {/* Victim Photo Placeholder */}
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-purple-800">
                      {victim.name!==null? victim.name.charAt(0):"U"}
                    </span>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-200 transition-colors">
                      {victim.name!==null?victim.name: "Unknown"}
                    </h3>
                    <p className="text-pink-200 font-medium mb-3">Age {victim.age!==null?victim.age:"Unknown"}</p>
                    
                    <div className="space-y-2 text-sm text-purple-100">
                      <div className="flex items-center justify-center">
                        <Calendar className="w-4 h-4 mr-2 text-pink-300" />
                        {date.toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                      <div className="flex items-center justify-center">
                        <MapPin className="w-4 h-4 mr-2 text-pink-300" />
                        {formatLocation(victim.city, victim.province)}
                      </div>
                    </div>
                    
                    <div className="mt-4 p-3 bg-black/20 rounded-lg border border-purple-400/20">
                      <p className="text-sm text-purple-100 leading-relaxed">
                        {victim.description!==null?victim.description:"No description available."}
                      </p>
                    </div>
                  </div>
                  
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-400/0 via-pink-400/5 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
    );
}