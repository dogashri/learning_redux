const redux = require('redux');
const createStore = redux.createStore;
const combineReducer = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

const buy_bottle = 'buy the bottle';
const buy_packets = 'buy the packets';

const initialStateBottle = {
    numberOfBottles:10,
    tagOnBottles :"Teachers"
}

const initialStatePacket = {
    numberOfPackets:20,
    tagOnPacket: "nuts"
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

const bottleReducer = (state=initialStateBottle,action)=>{
    switch(action.type){
        case buy_bottle:
            return{
            ...state,
            numberOfBottles:state.numberOfBottles-1
        }
        
        default:return state
    }
}

const packetReducer = (state=initialStatePacket,action)=>{
    switch(action.type){
        case buy_packets:
            return{
                ...state,
                numberOfPackets:state.numberOfPackets-2
            }
            default: return state
    }
}

const reducer = combineReducer({
    bottle:bottleReducer,
    packet:packetReducer
})

const logger = store=>{
    return next=>{
        return action=>{
            const result = next(action)
            console.log('middlewere log',result)
            return result;
        }
    }
}

const store=createStore(reducer,applyMiddleware(logger))
console.log('initial state',store.getState())
const unsuscribe = store.subscribe(()=>{console.log('updated state',store.getState())})
store.dispatch(buyBottles())
store.dispatch(buyPackets())

unsuscribe()