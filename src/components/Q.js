import React, {useState} from "react"
import Button from "./Button"

export default function Q({update, item: {question, correct_answer, answers}}){
 
    const [options, setOptions] = useState(newOptions())
    const [disabled, setDisabled] = useState(false)
    
    function newOptions() {
        const newArr = []
        for (let i=0; i < 4; i++){
            newArr.push({
                value: answers[i], 
                isSelect: false,
                isCorrect: false}
        )}
        return newArr
    }
    
    // WORK HERE
    function selected(id){
        setDisabled(true)
        setOptions(options.map((item, index) => {
            // console.log(item)
           if (correct_answer === item.value && id === index){
               update()
           }     
           if (correct_answer === item.value){
               return {...item, isCorrect: true}   
           }
           if (id === index){
              return {...item, isSelect: true}
           }
            else{
                return {...item}
            }
        })
        )
    }
    
    
    
    // console.log(update)
    const buttons = options.map((item, index) => <Button 
                                            item={item.value}
                                            isSelect={item.isSelect}
                                            isCorrect={item.isCorrect}
                                            id={index} 
                                            selected={selected}
                                            disable={disabled}
                                            up={update}
                                            />)
    


    return(
        
         <div className="main">
         <h2 dangerouslySetInnerHTML={{__html:question}}/>      
         {buttons}
         <hr/>
         </div>
 
        
    )
}
