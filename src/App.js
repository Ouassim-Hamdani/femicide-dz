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
      </div>
    </div>
  );
};

export default FemicideMemorial;