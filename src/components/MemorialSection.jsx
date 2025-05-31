import { VictimCard } from "./VictimCard";

export const MemorialSection = ({victims}) => {
    return (
        <main className="py-16 px-6">
                  <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-white text-center mb-12">
                      Never Forgotten
                      <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mt-4 rounded-full"></div>
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                      {victims.map((victim, index) => (
                        <VictimCard victim={victim} index={index}/>
                      ))}
                    </div>
                  </div>
                </main>
    );
}