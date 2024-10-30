import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import QuizSetup from './pages/quizsetup'
import QuizPage from './pages/quizpage'
import LeaderBoard from './pages/leaderboard'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<QuizSetup/>}/>
        <Route path="/quiz" element={<QuizPage/>}/>
        <Route path="/leaderboard" element={<LeaderBoard/>}/>
        
      </Routes>
    </>
  )
}

export default App
