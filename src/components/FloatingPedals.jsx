

export const FloatingPedals = () => {

    return (
        <>
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
                <div
                    key={i}
                    className="absolute animate-ping"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 3}s`,
                        animationDuration: `${3 + Math.random() * 2}s`
                    }}
                >
                    <div className="w-2 h-2 bg-pink-300 rounded-full opacity-30"></div>
                </div>
            ))}
        </div>
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={`rain-${i}`}
            className="absolute w-px bg-gradient-to-b from-transparent via-blue-200/40 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              top: '-50px',
              height: `${20 + Math.random() * 30}px`,
              animation: `rainFall ${1 + Math.random() * 2}s linear infinite`,
              animationDelay: `${Math.random() * 2}s`,
              transform: 'rotate(10deg)'
            }}
          />
        ))}
      </div>

      {/* Rain animation keyframes */}
      <style jsx>{`
        @keyframes rainFall {
          0% {
            transform: translateY(-50px) rotate(10deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(10deg);
            opacity: 0;
          }
        }
      `}</style>    
    
    
    </>)
        ;

}