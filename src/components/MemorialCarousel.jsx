// components/MemorialCarousel.jsx
import { useState } from 'react';
import { Heart,ChevronRight,ChevronLeft,LoaderCircle  } from 'lucide-react';

export const MemorialCarousel = ({ victims }) => {
  const [currentIndex, setCurrentIndex] = useState(0);



  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + victims.length) % victims.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % victims.length);
  };

  const currentVictim = victims[currentIndex];
  console.log("Current Victim:", currentVictim);
  if (!victims || victims.length === 0) {
    // If no victims data is available, show a loading message
    return (
      <section className="bg-gray-900/40 py-8 px-4 sm:px-6 backdrop-blur-sm lg:px-8 transition">
        <div className="max-w-5xl mx-auto text-center items-center flex justify-center text-white">
          <LoaderCircle className='animate-spin'/>
        </div>
      </section>
    );
  }
  return (
    <section className="bg-gray-900/40 py-16 px-4 sm:px-6 backdrop-blur-sm  lg:px-8 transition">
      <div className="max-w-5xl  mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <h2 className="text-4xl font-bold text-white">In Our Memory</h2>
          </div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Honoring the lives lost to gender-based violence. Each story matters, each life had value.
          </p>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Card */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:shadow-3xl">
            <div className="md:flex">
              {/* Image Section */}
              <div className="md:w-1/2 relative">
                <div className="aspect-w-18 aspect-h-12 md:h-96">
                  <img
                    src={currentVictim.image || '/images/default-memorial.jpg'}
                    alt={`Memorial for ${currentVictim.name}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                </div>
                
                {/* Overlay Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{currentVictim.name}</h3>
                  <div className="flex flex-wrap gap-2 text-sm">
                    <span className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                      {currentVictim.age} years old
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                      {currentVictim.date}
                    </span>
                  </div>
                  <p className="text-sm mt-2 opacity-90">{currentVictim.location}</p>
                </div>
              </div>

              {/* Content Section */}
              <div className="md:w-1/2 py-8 px-14 flex flex-col justify-center">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Her Story</h4>
                    <p className="text-gray-700 leading-relaxed">{currentVictim.description}</p>
                  </div>
                  
                  {currentVictim.memorialText && (
                    <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 p-4 rounded-r-lg">
                      <p className="text-purple-800 italic font-medium">
                        "{currentVictim.memorialText}"
                      </p>
                    </div>
                  )}
                  
                  <div className="flex items-center text-sm text-gray-500">
                    <Heart className="h-4 w-4 text-red-500 mr-1" />
                    <span>Forever remembered</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 border-2 border-gray-400   hover:bg-white text-gray-700 hover:text-purple-600 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label="Previous victim"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 border-2 border-gray-400 hover:bg-white  text-gray-700 hover:text-purple-600 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label="Next victim"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {victims.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full transition-all duration-200 focus:outline-none ${
                index === currentIndex
                  ? 'bg-purple-600 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to victim ${index + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="text-center mt-6">
          <span className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm text-sm text-gray-600">
            <span className="font-semibold text-purple-600">{currentIndex + 1}</span>
            <span className="mx-1">of</span>
            <span className="font-semibold">{victims.length}</span>
            <span className="ml-2">victims remembered</span>
          </span>
        </div>


      </div>
    </section>
  );
};

