import React, { useEffect, useState } from 'react';
import { useContext, useRef } from 'react';
import MyContext from '../../Context/ScoreContext';
import toast from 'react-hot-toast';

const Home = () => {

    let batting = 'w-9 md:w-14 h-9 md:h-14 flex items-center justify-center text-lg font-bold font-sans text-black bg-white border-4 border-black rounded-full m-2';
    let bowling = 'w-9 md:w-14 h-9 md:h-14 flex items-center justify-center text-lg font-bold font-sans text-white bg-red-600 border-4 border-black rounded-full m-2';
    const scoreMatched = useRef(false);
    const firstRound = useRef(true);
    const gameOver = useRef(false);

    const [counter, setCount] = useState(1);
    const [secondCounter, setSecondCounter] = useState(1);

    const { scorePlayer1,
        playerBatting,
        scorePlayer2,
        updateScorePlayer1,
        updateScorePlayer2,
        totalScorePlayer1,
        totalScorePlayer2,
        updateTotalScorePlayer1,
        updateTotalScorePlayer2,
        updatePlayerBatting
    } = useContext(MyContext);

    const restartGame = () => {
        firstRound.current = true;
        scoreMatched.current = false;
        gameOver.current = false;
        updatePlayerBatting(true);
        updateScorePlayer1(0, true);
        updateScorePlayer2(0, true);
        toast.success('Game Restarted', {
            duration: 1000
        });
        toast.success('You Are Batting', {
            duration: 2000
        });
    }

    const handleFirstRound = () => {
        firstRound.current = false;
        scoreMatched.current = true;
        setTimeout(() => {
            updateScorePlayer1(0, true);
            updateScorePlayer2(0, true);

            toast.success('You are bowling', {
                duration: 2000
            });
            updatePlayerBatting(false)
        }, 2000);
    }


    const handleSecondRound = () => {
        setTimeout(() => {
            updateScorePlayer1(0, true);
            updateScorePlayer2(0, true);
            updateTotalScorePlayer1(0);
            updateTotalScorePlayer2(0);
        }, 2000);
    }


    const handleScore = (e) => {
        const value = e.target.value;
        let randomScore = Math.floor(Math.random() * 6) + 1;
        if (value) {
            if (firstRound.current) {
                if (value != randomScore && !scoreMatched.current) {
                    setCount(counter + 1);
                    updateScorePlayer1(value, false);
                    updateScorePlayer2(randomScore, false);
                    if (counter == 6) {
                        // scoreMatched.current = true;
                        handleFirstRound();
                        toast.success('Inning Over', {
                            duration: 4000
                        });
                        setCount(0);
                    }
                }
                else {
                    if (!scoreMatched.current) {
                        updateScorePlayer1(value, false);
                        updateScorePlayer2(randomScore, false);
                        // scoreMatched.current = true;
                        handleFirstRound();
                        toast.error('OUT', {
                            duration: 2000
                        });
                    }
                }
            }
            else {
                if (!gameOver.current) {
                    if (value != randomScore && secondCounter < 6) {
                        setSecondCounter(secondCounter + 1);
                        updateScorePlayer1(value, false);
                        updateScorePlayer2(randomScore, false);
                    }
                    else {
                        updateScorePlayer1(value, false);
                        updateScorePlayer2(randomScore, false);
                        gameOver.current = true;
                        handleSecondRound();
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
    }, [scoreMatched.current])


    useEffect(() => {
        toast.success('You Are Batting', {
            duration: 2000
        });
    }, [])


    useEffect(() => {
        let totalScore2 = scorePlayer2.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        updateTotalScorePlayer2(totalScore2);
        if (totalScorePlayer1 < totalScore2) {
            handleSecondRound();
            gameOver.current = true;
            toast.error('You LOST', {
                duration: 4000
            });
        }
    }, [secondCounter])

    return (
        <section className='w-full'>
            <section className='flex w-full flex-col justify-center items-center h-24 mt-6 '>
                {playerBatting ? <p className='text-xs md:text-base text-center font-bold'>Hello! Welcome to the game. Here, you will receive six balls to bat at first. The runs you press will be your score. If the bowler hits the ball with the same run you have entered, you will be out, and Inning 2 will start.</p> : <p className='text-xs md:text-base text-center font-bold'>
                    Now, you will be bowling. If you bowl the same ball that the batsman tries to hit, the batsman will be out. Whoever has the highest score will win the match.</p>}
                <section className='mt-6 flex'>
                    <button className={playerBatting ? batting : bowling} value={1} onClick={(e) => { handleScore(e) }}>1</button>
                    <button className={playerBatting ? batting : bowling} value={2} onClick={(e) => { handleScore(e) }}>2</button>
                    <button className={playerBatting ? batting : bowling} value={3} onClick={(e) => { handleScore(e) }}>3</button>
                    <button className={playerBatting ? batting : bowling} value={4} onClick={(e) => { handleScore(e) }}>4</button>
                    <button className={playerBatting ? batting : bowling} value={5} onClick={(e) => { handleScore(e) }}>5</button>
                    <button className={playerBatting ? batting : bowling} value={6} onClick={(e) => { handleScore(e) }}>6</button>
                </section>
            </section >
            < section className='flex justify-center items-center h-16 mt-1 md:mt-12' >
                <button className='p-2 bg-rose-500 font-bold text-white border-black m-1 px-4 rounded-lg border text-xs md:text-lg' onClick={restartGame}>
                    Restart Game
                </button>
            </section >
        </section >
    )
}

export default Home
