export const Action = () => {
    return (
        <section className="bg-gradient-to-r from-pink-600/20 to-purple-600/20 backdrop-blur-sm py-16 px-6 border-t border-purple-400/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Take Action</h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Silence enables violence. Share their stories, demand justice, 
              and support organizations working to protect women in Algeria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/30 transform hover:scale-105">
                Share This Page
              </button>
              <button className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 transform hover:scale-105">
                Report a Case
              </button>
            </div>
          </div>
        </section>
    );
}