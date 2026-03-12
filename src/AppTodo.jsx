import { useReducer, useState } from 'react';
import './App.css';
import TodoList from './components/todo/TodoList';
import todoReducer from './reducer/todo-reducer';

const AppTodo = () => {

    const[todoText, setTodoText] = useState('');
    const [todos, dispatch] = useReducer(todoReducer, [
        {id: 0, text: 'HTML&CSS 공부하기', done: false},
        {id: 1, text: '자바스크립트 공부하기', done: false}
    ]);
    // const [todos, setTodos] = useState([
    //     {id: 0, text: 'HTML&CSS 공부하기', done: false},
    //     {id: 1, text: '자바스크립트 공부하기', done: false}
    // ]);
    const [insertAt, setInsertAt] = useState(todos.length -1);

    // 1) added
    const handleAddTodo = () => {
        dispatch({
            type: 'added',
            nextId: todos.length,
            todoText
        });
        // const nextId = todos.length;
        // setTodos([
        //     ...todos,
        //     {id: nextId, text: todoText, done: false}
        // ]);
        // setTodoText(''); // null, undefined 동작안함
    }

    // 2) added_index
    const handleAddTodoByIndex = () => {
        // const nextId = todos.length;
        // const newTodos = [
        //     // 삽입 지점 이전 항목
        //     ...todos.slice(0, insertAt),
        //     // 새 항목
        //     {id: nextId, text: todoText, done: false},
        //     // 삽입 지점 이후 항목
        //     ...todos.slice(insertAt)
        // ];
        // setTodos(newTodos);
        // setTodoText('');

        dispatch({
            type: 'added_index',
            insertAt,
            nextId: todos.length,
            todoText
        });
    }

    const handleTodoTextChange = (e) => {
        setTodoText(e.target.value);
    }

    // 3) deleted
    const handleDeleteTodo = (deleteId) => {
        //const newTodos = todos.filter(item => item.id != deleteId);
        // setTodos(newTodos);
        dispatch({
            type: 'deleted',
            deleteId
        });
    }

    const handleTodoKeyDown = (e) => {
        if(e.key === 'Enter' && todoText !== '') {
            handleAddTodo();
        }
    }

    // 4) done
    const handleToggleTodo = (id, done) => {
        // 기존 배열 안의 객체 속성을 변경
        // const nextTodos = todos.map(item => {
        //     if(item.id === id) {
        //         return {
        //             ...item,
        //             done: done
        //         };
        //     }
        //     return item;
        // });
        // setTodos(nextTodos);

        dispatch({
            type: 'done',
            id,
            done
        });
    }

    // 5) reverse
    const handleReverse = () => {
        //const nextTodos = [...todos];
        //nextTodos.reverse();
        //setTodos(nextTodos);
        //setTodos(todos.toReversed());
        dispatch({
            type: 'reverse'
        });
    }

    return (
        <div>
            <h2>할일목록</h2>
            <div>
                <input type="text" value={todoText} onChange={handleTodoTextChange} onKeyDown={handleTodoKeyDown}/>
                <button onClick={handleAddTodoByIndex}>추가</button>
            </div>
            <div>
                <select value={insertAt} onChange={(e) => (setInsertAt(e.target.value))}>
                    {todos.map((item, index) => (
                        <option key={item.id} value={index}>{index} 번째</option>
                    ))}
                </select>
                <button onClick={handleAddTodoByIndex}>{insertAt} 번째 추가</button>
            </div>
            <div>Preview: {todoText}</div>
            <button onClick={handleReverse}>Reverse</button>
            <TodoList 
                todos={todos} 
                onDeleteTodo={handleDeleteTodo} 
                onToggleTodo={handleToggleTodo} 
            />
        </div>
    );
}
export default AppTodo;