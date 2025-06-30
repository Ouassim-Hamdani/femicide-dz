import { FloatingPedals } from './components/FloatingPedals';
import { Header } from './components/Header';
import { StatsBar } from './components/StatsBar';
import { MemorialSection } from './components/MemorialSection';
import { Action } from './components/Action';
import { sampleVictims,activeYear, averageFrequency,victimesMemo } from './constants';
import { Footer } from './components/Footer';
import { MemorialCarousel } from './components/MemorialCarousel';

const FemicideMemorial = () => {
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      <FloatingPedals/>

      <div className="relative z-10">
        <Header/>

        <StatsBar deaths={sampleVictims.length} year={activeYear}  est={averageFrequency(sampleVictims)} justice={25}/>

        <MemorialSection victims={sampleVictims.slice().reverse()}/>

        <MemorialCarousel victims={victimesMemo}/>

        <Action/>

        <Footer/>

      {/* Rain effect */}
      


      </div>
    </div>
  );
};

export default FemicideMemorial;