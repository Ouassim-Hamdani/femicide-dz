import { FloatingPedals } from './components/FloatingPedals';
import { Header } from './components/Header';
import { StatsBar } from './components/StatsBar';
import { MemorialSection } from './components/MemorialSection';
import { Action } from './components/Action';
import { sampleVictims,activeYear } from './constants';
import { Footer } from './components/Footer';
const FemicideMemorial = () => {
  // Sample data - you'll replace this with real data
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      <FloatingPedals/>

      <div className="relative z-10">
        <Header/>

        <StatsBar deaths={21} year={activeYear}  est={3} justice={25}/>

        <MemorialSection victims={sampleVictims} />

        <Action/>

        <Footer/>

      {/* Rain effect */}
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


      </div>
    </div>
  );
};

export default FemicideMemorial;