function TodoList({ todos = [], onDeleteTodo, onToggleTodo }) {
    // const items = [...todos];
    // items.push({id: 2, text: '포트폴리오 사이트 만들기'});

    return (
        <ul>
            {/* {todos.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))} */}
            {todos.map((item) => {
                return (
                    <>
                        <li key={item.id}>
                            <input type="checkbox"
                                 checked={item.done} 
                                 onChange={(e) => onToggleTodo(item.id, e.target.checked)}/>
                            <span>{item.done ? (<del>{item.text}</del>) : item.text}</span>
                            <button onClick={() => onDeleteTodo(item.id)}>X</button>
                        </li>
                    </>
                )
            })}
        </ul>
    );

}
export default TodoList;