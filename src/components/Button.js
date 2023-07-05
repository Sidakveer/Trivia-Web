// import {nanoid} from "nanoid";
import React from "react"


export default function Button(props){
    
    const styles = {
        backgroundColor: checkClass(),
        opacity: isClicked()
    }
    
    function checkClass(){
        if (props.isCorrect && props.isSelect){
            return "#94D7A2"
        }
        else if (props.isCorrect) {
            return "#94D7A2"
        }
        else if (props.isSelect){
            return "#FE8484 "
        }
        
    }
    
    function isClicked(){
        if (props.isCorrect){
            return 1
        }
        else if (props.isSelect){
            return 0.5
        }
        else {
            return 1
        }
    }
    
    
        
    // console.log(props)
    return (
        <button className="button" style={styles} onClick={props.disable ? null : () => props.selected(props.id)}
        dangerouslySetInnerHTML={{__html:props.item}} /> 
    )
    
}