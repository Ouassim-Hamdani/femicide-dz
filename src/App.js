import { FloatingPedals } from './components/FloatingPedals';
import { Header } from './components/Header';
import { StatsBar } from './components/StatsBar';
import { MemorialSection } from './components/MemorialSection';
import { Action } from './components/Action';
import { averageFrequency,calculateDaysSinceLastVictimDeath } from './constants';
import { Footer } from './components/Footer';
import { MemorialCarousel } from './components/MemorialCarousel';
import axios from 'axios';
import { useEffect,useState } from 'react';
const FemicideMemorial = () => {
  const [victimsData, setVictimsData] = useState([]); 
  const [memoData, setMemoData] = useState([]); 
  const [activeYear, setActiveYear] = useState([]); 
  const [error, setError] = useState(null);
  const API_URL = "https://femicide-dz-backend.vercel.app/"; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL+"victims");
        setVictimsData(response.data); 
        console.log("Victims fetched successfully");
        const responseMemo = await axios.get(API_URL+"memos");
        setMemoData(responseMemo.data); 
        console.log("Memos Data fetched successfully");
        const responseYear = await axios.get(API_URL+"year");
        setActiveYear(responseYear.data.year); 
        console.log("Memos Data fetched successfully");
      } catch (err) {
        setError(err);
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

    return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      <FloatingPedals/>

      <div className="relative z-10">
        <Header/>

        <StatsBar deaths={victimsData.length} year={activeYear}  est={averageFrequency(victimsData)} days={calculateDaysSinceLastVictimDeath(victimsData)} />

        <MemorialSection victims={victimsData.slice().reverse()}/>

        <MemorialCarousel victims={memoData}/>

        <Action/>

        <Footer/>
      


      </div>
    </div>
  );
};

export default FemicideMemorial;