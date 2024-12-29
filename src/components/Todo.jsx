import { Check, X } from "lucide-react";
import { useDispatch } from "react-redux";
import { toggled, colorSelected, deleted } from "../redux/todos/actions";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const { text, id, color, completed } = todo;

  const handleStatusChange = (todoId) => {
    dispatch(toggled(todoId));
  };

  const handleColorChange = (todoId, color) => {
    dispatch(colorSelected(todoId, color));
  };

  const handleDelete = (todoId) => {
    dispatch(deleted(todoId));
  };
  return (
    <>
      <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
        <div
          className={`rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${
            completed && "border-green-500 focus-within:border-green-500"
          }`}
        >
          <input
            type="checkbox"
            checked={completed}
            onChange={() => handleStatusChange(id)}
            className="opacity-0 absolute rounded-full"
          />
          {completed && <Check></Check>}
        </div>

        <div className="select-none flex-1 line-through">{text}</div>

        <div
          className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-green-500 border-green-500 ${
            color === "green" && "  hover:bg-green-500 bg-green-500"
          }`}
          onClick={() => handleColorChange(id, "green")}
        ></div>
        <div
          className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-yellow-500 border-yellow-500 ${
            color === "yellow" && " border-yellow-500 bg-yellow-500"
          }`}
          onClick={() => handleColorChange(id, "yellow")}
        ></div>
        <div
          className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-red-500 border-red-500 ${
            color === "red" && " border-red-500 bg-red-500"
          }`}
          onClick={() => handleColorChange(id, "red")}
        ></div>

        <X onClick={() => handleDelete(id)} />
      </div>
    </>
  );
};

export default Todo;
