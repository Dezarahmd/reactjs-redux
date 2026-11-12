import { useDispatch, useSelector } from "react-redux";
import { decrement, getCounter, getDoubleCounter, increment } from "./counterSlice";

export default function Counter(){
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()

    function handleIncrement(){
        dispatch(increment())
    }

    function handleDecrement(){
        dispatch(decrement())
    }

    const doubleCounter = useSelector(getDoubleCounter)
    const tripleCounter = useSelector(state => getCounter(state, 3))

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <h1>Double Counter: {doubleCounter}</h1>
            <h3>Triple Counter: {tripleCounter}</h3>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={() => dispatch(increment(2))}>Increment + 2</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={() => dispatch(decrement(2))}>Decrement - 2</button>
        </div>
    )
}