import { useState } from 'react'
import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Score from './Components/Score/Score'
import MyContext from './Context/ScoreContext'
import { Toaster } from 'react-hot-toast';

function App() {
  const [scorePlayer1, setScorePlayer1] = useState([]);
  const [scorePlayer2, setScorePlayer2] = useState([]);
  const [playerBatting, setPlayerBatting] = useState(true);
  const [totalScorePlayer1, setTotalScorePlayer1] = useState();
  const [totalScorePlayer2, setTotalScorePlayer2] = useState();

  const updateScorePlayer1 = (value, reset) => {
    if (reset) {
      setScorePlayer1([]);
    }
    else {
      setScorePlayer1(prevState => [...prevState, Number(value)]);
    }
  }

  const updateScorePlayer2 = (value, reset) => {
    if (reset) {
      setScorePlayer2([]);
    }
    else {
      setScorePlayer2(prevState => [...prevState, value])
    }
  }

  const updateTotalScorePlayer1 = (value) => {
    setTotalScorePlayer1(value);
  }
  const updateTotalScorePlayer2 = (value) => {
    setTotalScorePlayer2(value);

  }

  const updatePlayerBatting = (value) => {
    setPlayerBatting(value);
  }



  const contextValue = {
    scorePlayer1,
    scorePlayer2,
    playerBatting,
    updateScorePlayer1,
    updateScorePlayer2,
    totalScorePlayer1,
    totalScorePlayer2,
    updateTotalScorePlayer1,
    updateTotalScorePlayer2,
    updatePlayerBatting
  };
  return (
    <MyContext.Provider value={contextValue}>
      <Toaster />
      <div className='flex flex-col items-center h-screen w-full bg-grey-100'>
        <Header />
        <Score />
        <Home />
        {/* <Footer /> */}
      </div>
    </MyContext.Provider>
  );
}

export default App;