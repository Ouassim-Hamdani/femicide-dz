import { AlertTriangle, Calendar, Users } from "lucide-react";

export const StatsBar = ({deaths,year,est,justice}) => {
    return (
        <div className="bg-black/30 backdrop-blur-sm py-8 px-6 border-y border-purple-400/30">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-gradient-to-r from-red-600/80 to-pink-600/80 rounded-xl p-6 backdrop-blur-sm border border-pink-300/20">
                <div className="flex items-center justify-center mb-3">
                  <AlertTriangle className="w-8 h-8 text-white mr-2" />
                  <span className="text-3xl font-bold text-white">{deaths}</span>
                </div>
                <h3 className="text-lg font-semibold text-white">Lives Lost in {year}</h3>
                <p className="text-pink-100 text-sm mt-1">Documented cases</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-600/80 to-indigo-600/80 rounded-xl p-6 backdrop-blur-sm border border-purple-300/20">
                <div className="flex items-center justify-center mb-3">
                  <Calendar className="w-8 h-8 text-white mr-2" />
                  <span className="text-3xl font-bold text-white">Every {est} Days</span>
                </div>
                <h3 className="text-lg font-semibold text-white">Average Frequency</h3>
                <p className="text-purple-100 text-sm mt-1">Estimated rate</p>
              </div>
              
              <div className="bg-gradient-to-r from-indigo-600/80 to-blue-600/80 rounded-xl p-6 backdrop-blur-sm border border-indigo-300/20">
                <div className="flex items-center justify-center mb-3">
                  <Users className="w-8 h-8 text-white mr-2" />
                  <span className="text-3xl font-bold text-white">{justice}%</span>
                </div>
                <h3 className="text-lg font-semibold text-white">Justice Rate</h3>
                <p className="text-indigo-100 text-sm mt-1">Cases with conviction</p>
              </div>
            </div>
          </div>
        </div>
    );
}