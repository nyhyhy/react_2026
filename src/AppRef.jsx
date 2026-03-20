import { useEffect, useRef, useState } from "react"

let counter = 0;

function ButtonCounter() {
    const countRef = useRef(0); //컴포넌트 별 저장공간 할당
    const [count, setCount] = useState(0);
    //let counter = 0;

    console.log('리렌더링');

    const handleClick = () => {
        countRef.current++;
        console.log('countRef:', countRef);
        setCount(count + 1);
        counter++;
        console.log(counter);
    }

    return (
        <>
            <button onClick={handleClick} >Count</button>
            <div>countRef: {countRef.current}</div>
            <div>count: {count}</div>
            <div>counter: {counter}</div>
        </>
    )
}

function Form() {
    const [form, setForm] = useState({
        title: "제목",
        author: "작성자",
        content: ""
    });

    const handleForm = (e) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }

    const titleInputRef = useRef(null);
    const authorInputRef = useRef(null);
    const contentInputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('DOM:', titleInputRef.current);

        if(!form.title) {
            titleInputRef.current.focus();
        }
        if(!form.author) {
            titleauthorInputRefInputRef.current.focus();
        }
        if(!form.content) {
            contentInputRef.current.focus();
        }
        console.log('저장성공');
    }

    useEffect(() => {
        if(!form.title) {
            titleInputRef.current.focus();
            return;
        }
        if(!form.author) {
            titleauthorInputRefInputRef.current.focus();
            return;
        }
        if(!form.content) {
            contentInputRef.current.focus();
            return;
        }
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>글쓰기</legend>
                <input ref={titleInputRef} value={form.title} onChange={handleForm} name="title" placeholder="제목" />
                <hr />
                <input ref={authorInputRef} value={form.author} onChange={handleForm} name="author" placeholder="작성자" />
                <hr />
                <textarea ref={contentInputRef} value={form.content} onChange={handleForm} name="content" placeholder="내용" />
                <hr />
                <button>전송</button>
            </fieldset>
        </form>
    )
}

export default function AppRef() {

    return (
        <>
            <h2>Count</h2>
            <ButtonCounter />
            <hr />
            <ButtonCounter />
            <h2>Form</h2>
            <Form />
        </>
    )
}