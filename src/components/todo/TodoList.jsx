import TodoItem from "./TodoItem";
import { useTodos } from "../../context/TodoContext";
import { useState } from "react";

function TodoList() {
    const todos = useTodos();
    const [isDone, setIsDone] = useState(false);
    const getFilteredTodos = () => {
        if(!isDone) {
            return todos;
        }
        return todos.filter((todos) => todos.done);
    } 
    const filteredTodos = getFilteredTodos();

    const getStatsCount = () => {
        const totalCount = todos.length;
        const doneCount = todos.filter((todo) => todo.done).length;
        return {
            totalCount,
            doneCount
        }
    }
    const { totalCount, doneCount } = getStatsCount();

    return (
        <>
            <div>
                <input
                    id="isDone"
                    type="checkbox"
                    checked={isDone}
                    onChange={(e)=>setIsDone(e.target.checked)}/>
                <label htmlFor="isDone">완료된 항목 보기({doneCount}/{totalCount})</label>
            </div>
            <ul>
                {filteredTodos.map((item) => {
                    return (
                        <>
                            <li key={item.id}>
                                <TodoItem 
                                    item={item}
                                />
                            </li>
                        </>
                    )
                })}
            </ul>
        </>
    );

}
export default TodoList;