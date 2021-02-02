import {ADD_TASK, UPDATE_TASK} from './actions';
import {tasksList} from './states';

export let reducer = (state= tasksList, action)=>{
    switch (action.type){
        case ADD_TASK :
            state = [...state, action.payload]
            return state
            case UPDATE_TASK :
            let index = state.findIndex(item => item.id === action.payload.id)
            //console.log(action.payload.id+"id")
            //console.log(state[index]+"element")
            state[index].description = action.payload.description
            //console.log(state[index].description+"desc")
            state[index].isDone = action.payload.isDone
            return state
            default :
            break ;
    }
    return state
}