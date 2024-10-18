import React, { useContext, useEffect, useState } from 'react';
import './QuestionBox.css';
import { Badge } from '@chakra-ui/react';
import quizContext from '../../context/quizContext';
import clickAudio from './../../Assets/select-sound.mp3';

const audio = new Audio(clickAudio);

const QuestionBox = (props) => {
    const [selectedAns, setSelectedAns] = useState('');
    const [timeList, setTimeList] = useState([]); // Store time taken for each question
    const context = useContext(quizContext);
    const { setScore, score, next, setNext, len, answerList, setAnswerList } = context;
    const { question, options, category } = props;

    let i = -1;
    const alphabet = ['A', 'B', 'C', 'D'];

    // Removes the selected class from all options
    const removeClass = () => {
        const elements = document.getElementsByClassName('q-box_body');
        for (let i = 0; i < elements.length; i++) {
            for (let j = 0; j < elements[i].children.length; j++) {
                elements[i].children[j].classList.remove('optionSelected', 'correct-answer', 'wrong-answer');
            }
        }
    };

    // Check the answer and update the score
    const checkAnswer = (selectedAns) => {
        if (selectedAns === '') {
            return true;
        } else if (selectedAns === options[1]) {
            setScore({ ...score, rightAnswers: score.rightAnswers + 1 });
        } else {
            setScore({ ...score, wrongAnswers: score.wrongAnswers + 1 });
        }
    };

    // Handle when an option is clicked
    const handleOptionClick = (e) => {
        audio.play();
        removeClass();
        const selected = (e.target.innerText.slice(1)).trim();
        setSelectedAns(selected);

        const currentAlpha = e.target.innerText[0];
        const isCorrect = selected === options[1];

        if (isCorrect) {
            document.getElementById(currentAlpha).classList.add('correct-answer'); // Apply correct answer style
        } else {
            document.getElementById(currentAlpha).classList.add('wrong-answer'); // Apply wrong answer style
        }
    };

    // Handle next question logic
    const handleNextQuestion = () => {
        const timeTakenForQuestion = timer; // Time taken for the current question
        setTimeList([...timeList, timeTakenForQuestion]); // Store the time for this question

        if (next <= len - 1) {
            checkAnswer(selectedAns);
            setNext(next + 1);
            setSelectedAns('');
            setTimer(0); // Reset timer for the next question (start from 0)
        }

        setAnswerList([...answerList, { 
            question, 
            options: options[0], 
            id: `id${next}`, 
            category, 
            myAnswer: selectedAns, 
            rightAnswer: options[1], 
            timeTaken: timeTakenForQuestion // Store time taken for review 
        }]);
    };

    // Timer starting from 0 for each question
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        const myInterval = setInterval(() => {
            setTimer(timer + 1); // Increment timer by 1 every second
        }, 1000);

        return () => {
            clearInterval(myInterval);
        };
    }, [timer]);

    // Calculate total time taken for all questions
    const totalTimeTaken = timeList.reduce((total, time) => total + time, 0);

    return (
        <>
            <div className="q-box mx-auto my-5 p-4 text-center">
                <div className="q-box_head">
                    <div className="q-box_timer">{timer}s</div>
                    <div className="q-number-container">
                        <div className="q-number-border">
                            <div className="q-number-fill"></div> {/* Filling effect */}
                        </div>
                        <div className="q-number">{next + 1}</div>
                    </div>
                    <div className="q-question" dangerouslySetInnerHTML={{ __html: question }}></div>
                </div>
                <div className="q-box_body">
                    {
                        options[0].map((index) => {
                            i++;
                            return (
                                <div
                                    id={alphabet[i]}
                                    key={index}
                                    onClick={handleOptionClick}
                                    className="q-box_options"
                                >
                                    <div className="option-icon">{alphabet[i]}</div>
                                    <div dangerouslySetInnerHTML={{ __html: index }}></div>
                                </div>
                            );
                        })
                    }
                </div>
                <div className="d-flex flex-wrap justify-content-between align-items-center mx-3">
                    <Badge colorScheme="purple">{category}</Badge>
                    <button onClick={handleNextQuestion} className="btn btn-primary m-2">
                        {next >= len - 1 ? 'Submit' : 'Next'}
                    </button>
                </div>

                {/* Example: Display total time taken for all questions */}
                <div className="total-time">
                    {next >= len - 1 && <p>Total Time Taken: {totalTimeTaken} seconds</p>}
                </div>
            </div>
        </>
    );
};

export default QuestionBox;
