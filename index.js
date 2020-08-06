const redux = require('redux');
const createStore = redux.createStore

const buy_bottle = 'buy the bottle'

const initialState = {
    numberOfBottles:10,
    tagOnBottles :"Teachers"
}

function buyBottles(){
    return{
        type:buy_bottle,
        info:"not my first redux code"
    }
}
console.log(buyBottles())

const Reducer = (state=initialState,action)=>{
    switch(action.type){
        case buy_bottle:
            return{
            ...state,
            numberOfBottles:state.numberOfBottles-1
        }
        default:return state
    }
}

const store=createStore(Reducer)
console.log('initial state',store.getState())
const unsuscribe = store.subscribe(()=>{console.log('updated state',store.getState())})
store.dispatch(buyBottles())

unsuscribe()