import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Task from './Task'
import {Button, Container,Row} from 'react-bootstrap'
import {Input} from 'reactstrap'
import { AddTask } from '../redux/actions'
const ListTask = ()=> {
    let taskList = useSelector(state=>state)
    let dispatch = useDispatch();
    const [newDescription, setDescription] = useState('')
    const handleDescription = (e)=>{
        setDescription(e.target.value)
    }

    let newTask = {
        id : taskList.length + 1,
        description : newDescription,
        isDone : false
    }

    return(
        <>
        <Container height = "500">
           <Row>
            <Input onChange = {handleDescription}  type = "text"></Input> 
           <Button color = "primary" onClick = {()=>{
               dispatch(AddTask(newTask))}}>Add</Button></Row> 
        </Container>
        <Container>
            <Row xs = "3">
        {taskList.map(task => {return <Task id = {task.id} description = {task.description} status = {task.isDone}></Task>})}  
        </Row>
        </Container>
        </>
    )
}
export default ListTask