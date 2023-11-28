import React, { useState } from 'react';
export default function App() {
    const [qtext, setQtext] = useState("Менің үйімде __ теледидар бар.")
    const [answers, setAnswers] = useState([
        { answerText: 'ұлы', isCorrect: false },
        { answerText: 'үлу', isCorrect: false },
        { answerText: 'үлкен', isCorrect: true },
        { answerText: 'үстем', isCorrect: false },
    ])
    const [qnumber, setQnumber] = useState(0)
    const [cnumber, setCnumber] = useState(0)
    const [quit, setQuit] = useState(false)

    const [answered, setAnswered] = useState(false)

    const questions = [
        {
            questionText: "Менің үйімде __ теледидар бар.",
            answerOptions: [
                { answerText: 'ұлы', isCorrect: false },
                { answerText: 'үлу', isCorrect: false },
                { answerText: 'үлкен', isCorrect: true },
                { answerText: 'үстем', isCorrect: false },
            ],
        },
        {
            questionText: 'Казақстан__ премьер министрі - Алихан Смайлов ',
            answerOptions: [
                { answerText: 'ның', isCorrect: false },
                { answerText: 'да', isCorrect: true },
                { answerText: 'дарда', isCorrect: false },
                { answerText: 'ды', isCorrect: false },
            ],
        },
    ];

    const tick = (isCorrect) => {
        let cnt = qnumber
        if (cnt > questions.length - 1) {
            setQuit(true)
            setQnumber(0)
        }
        else if (isCorrect) {
            if (cnt == questions.length - 1) {
                setQuit(true)
            }
            else {
                setAnswered(true)
            }
            let c = cnumber
            setCnumber(c + 1)
        }
        else if (!isCorrect) {
            if (cnt == questions.length - 1) {
                setQuit(true)
            }
            else {
                setAnswered(true)
            }
        }
    }

    const next = () => {
        let cnt = qnumber

        if (cnt == questions.length - 1) {
            setQuit(true)
        }
        else {
            setAnswers(questions[cnt + 1].answerOptions)
            setQtext(questions[cnt + 1].questionText)
            setQnumber(cnt + 1)
        }
        let c = cnumber
        setCnumber(c + 1)
    }

    return (
        <div className='app'>
            {quit ? (
                <div className='score-section'>You scored {cnumber} out of {questions.length}</div>
            ) : (
                <>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Question {qnumber + 1}</span>/{questions.length}
                        </div>
                        <div className='question-text'>{qtext}</div>
                    </div>
                    <div className='answer-section'>
                        <button onClick={() => tick(answers[0].isCorrect)}>{answers[0].answerText}</button>
                        <button onClick={() => tick(answers[1].isCorrect)}>{answers[1].answerText}</button>
                        <button onClick={() => tick(answers[2].isCorrect)}>{answers[2].answerText}</button>
                        <button onClick={() => tick(answers[3].isCorrect)}>{answers[3].answerText}</button>
                    </div>
                    <button onClick={() => next()} style={answered ? { 'display': '100%' } : { 'display': 'none ' }}>Next</button>
                </>
            )}
        </div>
    );
}