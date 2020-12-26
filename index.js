const redux=require("redux")
const createStrore=redux.createStore;
const combineReducers=redux.combineReducers;

const inital_state={
    apple:20,
    mango:30,
    guava:4,
    kivi:5}

const inital_state_1={
    guava:4,
    kivi:5
}

const apple=()=>{
    return{
        type:"apple",
        info:"my first state"
    }
}
const mango=()=>{
    return{
        type:"mango",
        ino:"i wanna buy mango"

    }
}

const guava=()=>{
    return{
        type:"guava",
        info:"i wanna buy guava"
    }
}

const kivi=()=>{
    return {
        type:"kivi",
        info:"i wanna buy kivi sir"
    }
}

const Reducer_minus=(state=inital_state,action)=>{
    switch (action.type) {
        case "apple":
            return{
                ...state,
                apple:state.apple-1}
        case "mango":
            return{
                ...state,
                mango:state.mango-1
            }
            case "guava":
            return{...state,guava:state.guava-1}
        
        case "kivi":
            return{...state,kivi:state.kivi-1}
        
        default:return state
    }}


const Reducer_plus=(state=inital_state,action)=>{
    switch (action.type) {
        case "apple":
        return{
        ...state,
        apple:state.apple+1}
        case "mango":
             return{
        ...state,
        mango:state.mango+1
    }
        case "guava":
            return{...state,guava:state.guava+1}
        
        case "kivi":
            return{...state,kivi:state.kivi+1}
        
        default:return state
    }
    
}

const Reducer=combineReducers({
    plus:Reducer_plus,
    minus:Reducer_minus

})

const Store=createStrore(Reducer)
console.log("initial State",Store.getState())
const unsubscribe=Store.subscribe(()=>{
console.log("Updated Value",Store.getState())})
Store.dispatch(apple())
Store.dispatch(mango())
Store.dispatch(apple())
Store.dispatch(guava())
Store.dispatch(apple())
Store.dispatch(apple())
Store.dispatch(kivi())
Store.dispatch(apple())
Store.dispatch(kivi())
Store.dispatch(mango())

unsubscribe()