import { Heart } from 'lucide-react';

export const Header = () => {
    return (
        <header className="text-center py-16 px-6 bg-black/20 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Heart className="w-16 h-16 text-pink-300 filter drop-shadow-lg" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              في ذكراهن
              <span className="block text-3xl md:text-4xl text-pink-200 mt-2">
                In Their Memory
              </span>
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto leading-relaxed">
              Honoring the female lives lost to gender-based violence in Algeria. 
              Each name represents a life cut short, a family devastated, a future stolen.
            </p>
          </div>
        </header>
    );
}