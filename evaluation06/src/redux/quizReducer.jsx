import { SET_USER_DETAILS,SET_QUESTIONS, NEXT_QUESTION, PREVIOUS_QUESTION, INCREASE_SCORE, RESET_QUIZ } from "./actions"

const initState = {
    user:null,
    questions:[],
    currentQuestionid:0,
    score:0
}

const quizReducer = (state = initState ,{type,payload})=>{
    switch (type) {
       case SET_USER_DETAILS:
        return {
            ...state, user: payload
        }
        case SET_QUESTIONS:
            return{
                ...state,
                questions: payload
            }
        case NEXT_QUESTION:
            return{
                ...state, currentQuestion: state.currentQuestion+1
            } 
        case PREVIOUS_QUESTION:
            return{
                ...state, currentQuestion: state.currentQuestion-1
            }
        case INCREASE_SCORE:
            return{
                ...state, score: state.score+1
            }
        case RESET_QUIZ:
            return(
                {
                    ...state, currentQuestion: 0, score:0
                }
            )
        default:
            return state;
    }
}

export default quizReducer;