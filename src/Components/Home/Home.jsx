import React, { useEffect, useState } from 'react'
import { useContext, useRef } from 'react'
import MyContext from '../../Context/ScoreContext'
import toast from 'react-hot-toast';

const Home = () => {
    const restartGame = () => {
        round1.current = true;
        gameOver.current = false;
        updateScorePlayer1(0, true);
        updateScorePlayer2(0, true);
        toast.success('Game Restarted', {
            duration: 1000
        });
        toast.success('You Are Batting', {
            duration: 2000
        });
    }
    const scoreMatched = useRef(false);
    const round1 = useRef(true);
    const gameOver = useRef(false);
    const [mode, setMode] = useState("Batting");
    // const [randomGlobal, setRandomGlobal] = useState(null);

    const [counter, setCount] = useState(1);
    const [counter2, setCount2] = useState(1);

    const { scorePlayer1,
        scorePlayer2,
        updateScorePlayer1,
        updateScorePlayer2,
        totalScorePlayer1,
        totalScorePlayer2,
        updateTotalScorePlayer1,
        updateTotalScorePlayer2
    } = useContext(MyContext);
    const handleRound1 = () => {

        setTimeout(() => {
            // scoreMatched.current = false;
            updateScorePlayer1(0, true);
            updateScorePlayer2(0, true);
            round1.current = false;
            setMode("Bowling")
            toast.success('You are bowling', {
                duration: 2000
            });
        }, 4000);
    }

    const handleRound2 = () => {
        setTimeout(() => {
            // scoreMatched.current = false;
            updateScorePlayer1(0, true);
            updateScorePlayer2(0, true);
            updateTotalScorePlayer1(0); updateTotalScorePlayer2(0);

            // round1.current = false;
        }, 4000);
    }

    const handleScore = (e) => {
        const value = e.target.value;
        // setvalueGlobal(value);

        let randomScore = Math.floor(Math.random() * 6) + 1;
        // setRandomGlobal(randomScore);
        if (value) {
            if (round1.current) {
                setMode("Batting")
                if (value != randomScore && !scoreMatched.current) {
                    setCount(counter + 1);
                    updateScorePlayer1(value, false);
                    updateScorePlayer2(randomScore, false);
                    console.log(counter);
                    if (counter == 6) {
                        scoreMatched.current = true;
                        handleRound1();
                        toast.success('Inning Over', {
                            duration: 4000
                        });
                        setCount(0);
                    }
                }
                else {
                    if (!scoreMatched.current) {
                        console.log("Value matched");
                        updateScorePlayer1(value, false);
                        updateScorePlayer2(randomScore, false);
                        scoreMatched.current = true;
                        handleRound1();
                        toast.error('OUT', {
                            duration: 4000
                        });
                    }
                }
            }
            else {
                if (!gameOver.current) {
                    if (value != randomScore && counter2 < 6) {
                        setCount2(counter2 + 1);
                        updateScorePlayer1(value, false);
                        updateScorePlayer2(randomScore, false);
                        console.log(totalScorePlayer2);
                        console.log(totalScorePlayer1);

                    }
                    else {
                        updateScorePlayer1(value, false);
                        updateScorePlayer2(randomScore, false);
                        gameOver.current = true;
                        handleRound2();
                        if (totalScorePlayer1 > totalScorePlayer2) {
                            toast.success('You WIN', {
                                duration: 4000
                            });
                        }
                        else {
                            toast.error('You LOST', {
                                duration: 4000
                            });
                        }
                    }
                }

            }
        }
    }
    useEffect(() => {
        let totalScore1 = scorePlayer1.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

        updateTotalScorePlayer1(totalScore1);
        // updateTotalScorePlayer2(totalScore2);



    }, [scoreMatched.current])

    useEffect(() => {
        toast.success('You Are Batting', {
            duration: 2000
        });
    }, [])

    useEffect(() => {
        let totalScore2 = scorePlayer2.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        updateTotalScorePlayer2(totalScore2);
        console.log(totalScore2);
        if (totalScorePlayer1 < totalScore2) {
            // updateScorePlayer1(valueGlobal, false);
            // updateScorePlayer2(randomGlobal, false);
            handleRound2();
            gameOver.current = true;
            toast.error('You LOST', {
                duration: 4000
            });
        }
    }, [counter2])

    return (
        <section>
            <section className='flex w-full flex-col justify-center items-center h-24 mt-6 '>
                <h3>{`You are ${mode}`}</h3>
                <section className='mt-6'>
                    <button className='p-2 bg-slate-300 m-1 px-4 rounded-lg border' value={1} onClick={(e) => { handleScore(e) }}>1</button>
                    <button className='p-2 bg-slate-300 m-1 px-4 rounded-lg border' value={2} onClick={(e) => { handleScore(e) }}>2</button>
                    <button className='p-2 bg-slate-300 m-1 px-4 rounded-lg border' value={3} onClick={(e) => { handleScore(e) }}>3</button>
                    <button className='p-2 bg-slate-300 m-1 px-4 rounded-lg border' value={4} onClick={(e) => { handleScore(e) }}>4</button>
                    <button className='p-2 bg-slate-300 m-1 px-4 rounded-lg border' value={5} onClick={(e) => { handleScore(e) }}>5</button>
                    <button className='p-2 bg-slate-300 m-1 px-4 rounded-lg border' value={6} onClick={(e) => { handleScore(e) }}>6</button>
                </section>
            </section >
            <section className='flex justify-center items-center h-16 mt-10'>
                <button className='p-2 bg-slate-300 m-1 px-4 rounded-lg border' onClick={restartGame}>
                    Restart Game
                </button>
            </section>
        </section>

    )
}

export default Home