import { VictimCard } from "./VictimCard";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Users } from "lucide-react";

export const MemorialSection = ({victims}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const cardsPerPage = 8; // Adjust based on your preference
    
    const totalPages = Math.ceil(victims.length / cardsPerPage);
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const currentVictims = victims.slice(startIndex, endIndex);
    
    const goToPage = (page) => {
        if (isTransitioning) return; // Prevent rapid clicks
        
        setIsTransitioning(true);
        
        // Start fade out
        setTimeout(() => {
            setCurrentPage(page);
            // Smooth scroll to top of section
            document.querySelector('#memorial-section')?.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
            
            // End transition after cards have time to animate in
            setTimeout(() => {
                setIsTransitioning(false);
            }, 300);
        }, 200);
    };
    
    const nextPage = () => {
        if (currentPage < totalPages) goToPage(currentPage + 1);
    };
    
    const prevPage = () => {
        if (currentPage > 1) goToPage(currentPage - 1);
    };
    
    // Add styles to document head
    useEffect(() => {
        const styleId = 'memorial-animations';
        if (!document.getElementById(styleId)) {
            const style = document.createElement('style');
            style.id = styleId;
            style.textContent = `
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px) scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }
                .animate-fadeInUp {
                    animation: fadeInUp 0.6s ease-out;
                }
            `;
            document.head.appendChild(style);
        }
        
        return () => {
            // Cleanup on unmount
            const existingStyle = document.getElementById(styleId);
            if (existingStyle) {
                existingStyle.remove();
            }
        };
    }, []);

    return (
        <main id="memorial-section" className="py-16 px-6 transition-all ">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Never Forgotten
                        <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mt-4 rounded-full"></div>
                    </h2>
                    
                    {/* Stats */}
                    <div className="flex items-center justify-center text-purple-200 mt-6 mb-8">
                        <Users className="w-5 h-5 mr-2" />
                        <span className="text-lg">
                            Remembering {victims.length} beautiful souls
                        </span>
                    </div>
                </div>
                
                {/* Cards Grid */}
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12 transition-all duration-500 ${
                    isTransitioning 
                        ? 'opacity-0 transform translate-y-8 scale-95' 
                        : 'opacity-100 transform translate-y-0 scale-100'
                }`}>
                    {currentVictims.map((victim, index) => (
                        <div
                            key={`${victim.id}-${currentPage}`} // Force remount for animation
                            className="animate-fadeInUp"
                            style={{
                                animationDelay: `${index * 0.1}s`,
                                animationFillMode: 'both'
                            }}
                        >
                            <VictimCard 
                                victim={victim} 
                                index={0} // Reset index for consistent animation
                            />
                        </div>
                    ))}
                </div>
                
                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <div className="flex flex-col items-center space-y-6">
                        {/* Page Info */}
                        <div className="text-purple-200 text-sm">
                            Showing {startIndex + 1}-{Math.min(endIndex, victims.length)} of {victims.length}
                        </div>
                        
                        {/* Navigation Buttons */}
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={prevPage}
                                disabled={currentPage === 1 || isTransitioning}
                                className="flex items-center px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-400/30 rounded-xl text-white hover:from-pink-500/30 hover:to-purple-500/30 hover:border-pink-400/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
                            >
                                <ChevronLeft className="w-4 h-4 mr-2" />
                                Previous
                            </button>
                            
                            {/* Page Numbers */}
                            <div className="flex space-x-2">
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                    <button
                                        key={page}
                                        onClick={() => goToPage(page)}
                                        disabled={isTransitioning}
                                        className={`w-10 h-10 rounded-lg font-medium transition-all duration-300 ${
                                            currentPage === page
                                                ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg transform scale-110'
                                                : 'bg-white/10 text-purple-200 hover:bg-white/20 hover:text-white border border-white/20 hover:scale-105'
                                        } ${isTransitioning ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    >
                                        {page}
                                    </button>
                                ))}
                            </div>
                            
                            <button
                                onClick={nextPage}
                                disabled={currentPage === totalPages || isTransitioning}
                                className="flex items-center px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-400/30 rounded-xl text-white hover:from-pink-500/30 hover:to-purple-500/30 hover:border-pink-400/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
                            >
                                Next
                                <ChevronRight className="w-4 h-4 ml-2" />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}