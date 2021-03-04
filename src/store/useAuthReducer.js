import React,{useReducer} from 'react'
export default function useAuthReducer(){

    const initState={
        user:null,
        isLoggingStart:false,
        isNewUser:false,
        score:0,
        error:false,
    }
    const reducer = (state,actions) => {
        switch(actions.type)
        {
            case 'sign-up':
                return{
                    ...state,
                    user:actions.payload,
                    isLoggingStart:false,
                    isNewUser:true,
                }
            case 'sign-in':
                return{
                    ...state,
                    user:actions.payload,
                    isLoggingStart:false,
                }
            case 'logging-State':
                console.log('in updating isLoggingStart')
                return{
                    ...state,
                    isLoggingStart:true,
                }
                // server share kar bhadwe
            case 'set-score':
                return {
                    ...state,
                    score:actions.payload,
                }
                default:
                return state;
        }
    } 
    return useReducer(reducer,initState);
}