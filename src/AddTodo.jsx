import {useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";
import {addTodo} from "./todoListSlice.js";

export default function AddTodo() {

  const [name, setName] = useState("");
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleClick() {
    dispatch(addTodo({name: name}))
    navigate("/todolist")
  }

  return (
    <div>
      <h1>Add Todo</h1>
      <input type={"text"} placeholder={"Enter todo name"}
             onChange={(e) => setName(e.target.value)}/>
      <button onClick={handleClick}>Add</button>
    </div>
  )
}