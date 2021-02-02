export const ADD_TASK = 'ADD_TASK'
export const AddTask = (task)=>{
    return ({
    type : ADD_TASK,
    payload : task
    })
}
export const UPDATE_TASK = 'UPDATE_TASK'
export const updateTask = (task)=>{
    return ({
    type : UPDATE_TASK,
    payload : task
    })
}