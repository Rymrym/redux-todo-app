import React, {useState} from 'react'
import {Button, Input} from 'reactstrap'
import {useDispatch} from 'react-redux'
import { updateTask } from '../redux/actions';
import Modal from 'react-modal'
import { FcOk, FcHighPriority } from "react-icons/fc";


const Task = (props)=> {
    const [modalState, setModalState]= useState(false)
    const [inputValue, setInputValue]= useState(props.description)
    const [check, setCheck]= useState(false)
    let dispatch = useDispatch();
    const style = {
        height : "200", 
        width : "280", 
        backgroundColor : 'black'
    }
    

    let updatedTask = {
        id : props.id ,
        description : inputValue,
        isDone : check
    }
    const handleChange = (e) =>{
setInputValue(e.target.value)
    }

    const handleCheckBox = (e) =>{
        setCheck(e.target.value)
            }
         

    return(
        <>
       
      
                    <div style = {{width : 333, float : "left", backgroundColor :"whitesmoke", margin : 10, height : 150, padding : "50"}}>
                    <h3>{props.description}</h3>
    {props.status? (<FcOk size = "2em" style = {{float : "left", marginRight: "50"}}/>) : (<FcHighPriority size = "2em" style = {{float : "left", marginRight: "50"}} />)} <Button color ="primary"  onClick = {()=>setModalState(true)} margin-top = "10">Edit</Button>
                    </div>
                    
                    <Modal isOpen={modalState}>
        <div style ={{margin : 70, height : "300", width : "200"}}>
        <Input placeholder={props.description} onChange = {handleChange}/><br/>
        <Input  type = "checkbox" onChange = {handleCheckBox}/><br/>
        <Button color ="dark" onClick = {()=>{dispatch(updateTask(updatedTask))
        setModalState(false)}}>Edit</Button>
        </div>
        </Modal> 
      
        </>
    )
}
export default Task