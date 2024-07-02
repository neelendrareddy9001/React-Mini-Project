import React from 'react'

const Result = ({userAnswer, question, resetQuiz = () => {}}) => {
    const correctAnswers = userAnswer.filter((answer) => answer.length)
  return (
    <div className='results'>
      <h2>Results</h2>
      <p>You answered {correctAnswers} out of {question.length} questionns {""}
        <span onClick={resetQuiz} style={{cursor: "pointer"}}>Click here Retry</span>
      </p>
      <ul>
        {question.map((question, index) => {
            return (
                <li key={index} data-correct={userAnswer[index]}>
                    Q{index + 1}. {question.question}
                </li>
            )
        })}
      </ul>
    </div>
  )
}

export default Result
