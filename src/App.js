import React, {useState, useEffect} from "react"
import Q from "./components/Q"
import { Freeze } from 'react-freeze';

export default function App() {
    
    const [questions, setQuestions] = useState([])
    const [finish, setFinish] = useState(false)
    const [count, setCount] = useState(0)

    
useEffect(() => {
     fetch("https://opentdb.com/api.php?amount=5&category=20&type=multiple")
     .then(res => res.json())
     .then(res => {
         const ques = res.results.map(item => ({
            ...item,
            answers: [item.correct_answer, ...item.incorrect_answers].sort(() => Math.random() - 0.5),
            count: false,
         }
         ))  
         setQuestions(ques)
     })
      
}, [])
    
    
    function updateCount(){
        setCount(prevCount => prevCount + 1)     
    }

    function play(){
        setFinish(false)
        window.location.reload(false)
    }
    
    
    function check(){
        setFinish(true)
    }
    
    const elements = questions.map((item, index) => <Q key={index}
                                                     update={updateCount}
                                                     id={index}
                                                     item={item}
                                                      />)

    return(
        <>
        <div className="questions" >
        <h1 className="header-1">TEST YOUR KNOWLEDGE ON MYTHOLOGY?</h1>
        <Freeze freeze={finish}>
        {elements}
        </Freeze>
        
        {!finish && <button onClick={check} className="check-button" > <h2 className="play-button">Check Score</h2></button>}
        {/* <div className="score"> */}
        </div>
    
        {finish && <div className="score"> <h1>Your final score is {count}/5</h1>
          <button onClick={play} className="check-button" > <h2 className="play-button">Play Again</h2> </button> </div>}
        
        
        
        {/* </div> */}
        
        </>
    )
}




 
