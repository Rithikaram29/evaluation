import axios from "axios";
import { useDispatch } from "react-redux";

export const SET_USER_DETAILS = "SET_USER_DETAILS";
export const SET_QUESTIONS="SET_QUESTIONS";
export const NEXT_QUESTION="NEXT_QUESTION"
export const PREVIOUS_QUESTION = "PREVIOUS_QUESTION";
export const INCREASE_SCORE = 'INCREASE_SCORE';
export const RESET_QUIZ = 'RESET_QUIZ';

export const setUserDetails = (details)=>{
    return{
        type: SET_USER_DETAILS,
        payload: details
    }
}

export const setQuestions = (questions)=>{
    return{
        type: SET_QUESTIONS,
        payload: questions
    }
}

export const nextQuestion = ()=>{
    return({
        type: NEXT_QUESTION,
        payload:null
    })
}

export const previousQuestion = ()=>{
    return({
        type: PREVIOUS_QUESTION,
        payload:null
    })
}

export const increaseScore = ()=>{
  return({
    type: INCREASE_SCORE,
    payload:null
  })
}

export const resetQuiz = ()=>{
    return(
        {
            type: RESET_QUIZ,
            payload
        }
    )
}


export const fetchQuestions = (amount,category,difficulty)=>{
    async (dispatch)=>{
        try {
            const response = await fetch(
                `https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple`
            )
            let data = response.json();
            console.log(data);
            dispatch(setQuestions(data.results))
        } catch (error) {
            console.log(error)
        } 
    }
}
