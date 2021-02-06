import {ADD_TASK, SEARCH_DONE, SEARCH_TASK, SEARCH_UNDONE, UPDATE_TASK} from './actions';
import {tasksList} from './states';

export let reducer = (state= tasksList, action)=>{
    switch (action.type){
        case ADD_TASK :
           let Newstate = [...state.list, action.payload]
            return( {list:Newstate, isLoading :true})
            case UPDATE_TASK :
            let index = state.list.findIndex(item => item.id === action.payload.id)
            console.log(action.payload.id+"id")
            console.log(JSON.stringify(state[index])+"element")
            // state[index].description = action.payload.description
            // console.log(state[index].description+"desc")
            // state[index].isDone = action.payload.isDone
            let newState = state.list.map(el => {
                if (el.id == action.payload.id) {
                    return {...action.payload}
                }
                else return el
            })
            return ({list:newState,isLoading:false})
        case SEARCH_DONE :
          return state.filter(item=>item.isDone) 
        case SEARCH_UNDONE :
        return state.filter(item=>item.isDone == false)
             
            default :
            break ;
    }
    return state
}