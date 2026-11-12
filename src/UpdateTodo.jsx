import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router"
import { getTodo, updateTodo } from "./todoListSlice"

export default function UpdateTodo(){
    const params = useParams()
    const todo = useSelector((state) => getTodo(state, Number(params.id)))
    const [name, setName] = useState(todo.name)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleClick(){
        dispatch(updateTodo({id: todo.id, name: name}))
        navigate("/todoList")
    }
    return (
        <div>
            <h1>Update todo</h1>
            <input type="text" value={name} placeholder="enter todo..." onChange={(e) => setName(e.target.value)}/>
            <button onClick={handleClick}>Update</button>
        </div>
    )
}