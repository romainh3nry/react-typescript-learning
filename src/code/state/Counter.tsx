import React from "react"

type CounterState = {
    count: number
}

type UpdateAction = {
    type: 'increment' | 'decrement' |'reset',
    payload: number
}

type ResetAction = {
    type: 'reset'
}

type CounterAction = UpdateAction | ResetAction

const initialState = { count: 0 }

const reducer = (state: CounterState, action: CounterAction) => {
    switch(action.type) {
        case 'increment':
            return { count: state.count + action.payload }
        case 'decrement':
            return { count: state.count - action.payload }
        case 'reset':
            return initialState
        default:
            return state
    }
}

export const Counter = () => {

    const [state, dispatch] = React.useReducer(reducer, initialState)

    return (
        <>
        Count: state.count
        <button type="button" onClick={() => dispatch({type: 'decrement', payload: 10})}>Increment</button> 
        <button type="button" onClick={() => dispatch({type: 'increment', payload: 20})}>Decrement</button> 
        <button type="button" onClick={() => dispatch({type: 'reset' })}>Reset</button> 
        </>
    )
};