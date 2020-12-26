const redux=require("redux")
const createStore=redux.createStore;


const State={
    loading:false,
    user:[],
    error:''
}

const User_Request=()=>{
    return {
        type:"User_request",
        payload:"Request"
    }
}

const User_Success=()=>{
    return {
        type:"User_Success",
        payload:"Success"
    }
}

const User_Error=()=>{
    return {
        type:"User_Error",
        payload:"Error"
    }
}

const Reducer=(state=State,action)=>{
    switch (action.type) {
        case 'User_Request':return{...state,loading:true}
            
        case 'User_Success':return{loading:false,user:action.payload,error:''}

        case 'User_Error' : return {loading:false,user:[],error:payload}
    
        default:
            break;
    }
}

