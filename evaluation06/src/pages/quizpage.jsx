import { useDispatch, useSelector } from "react-redux"
import {useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { increaseScore, nextQuestion } from "../redux/actions"

 const QuizPage = ()=>{
const dispatch = useDispatch()

const questions = useSelector((state)=> state.questions);
const  currentQuestionId= useSelector((state)=> state. currentQuestionid);
const score = useSelector((state)=> state.score);

const currentQuestion = questions[ currentQuestionId];
const [time, setTime]= useState(10);
const navigate = useNavigate;

useEffect(()=>{
    const difTime = {
        easy:20,
        medium:15,
        hard:10
    }
    let timeLeft = difTime[currentQuestion.difficulty]

    setTime(timeLeft)
    console.log(currentQuestion)

    const timer = setInterval(() => {
        setTime((prev=> prev-1))
    }, 1000);
 
    if(time === 0){
        clearInterval(timer);
        dispatch(nextQuestion())
    }

    return ()=> clearInterval(timer)
},[currentQuestion,time,dispatch])

const answers = [...currentQuestion.incorrect_answers,currentQuestion.correct_answer].sort(
    ()=> Math.random() -0.5
)

const handleOptions=(ele)=>{
    if(ele === currentQuestion.correct_answer){
        dispatch(increaseScore());
        dispatch(nextQuestion())
    }
    if(!currentQuestion){
        return<div>loading...</div>
    }
}

    return (
        <>
      <div>
        <h2>{currentQuestion.question}</h2>
       <ul>
        {
            answers.map((ele,i)=>{
                return(
                    <li key={i} onClick={()=>handleOptions(ele)}>{ele}</li>
                )
            })
        }
       </ul>
      </div>
        </>
    )
}
export default QuizPage