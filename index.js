const redux = require('redux');
const createStore = redux.createStore;

const buy_bottle = 'buy the bottle';
const buy_packets = 'buy the packets';

const initialState = {
    numberOfBottles:10,
    numberOfPackets:20,
    tagOnBottles :"Teachers"
}


// action creators
function buyBottles(){
    return{
        // actions
        type:buy_bottle,
        info:"not my first redux code"
    }
}

function buyPackets(){
    return{
        type:buy_packets,
        payload:"not my first redux code"
    }
}

const Reducer = (state=initialState,action)=>{
    switch(action.type){
        case buy_bottle:
            return{
            ...state,
            numberOfBottles:state.numberOfBottles-1
        }
        case buy_packets:
            return{
                ...state,
                numberOfPackets:state.numberOfPackets-2
            }
        default:return state
    }
}

const store=createStore(Reducer)
console.log('initial state',store.getState())
const unsuscribe = store.subscribe(()=>{console.log('updated state',store.getState())})
store.dispatch(buyBottles())
store.dispatch(buyPackets())

unsuscribe()