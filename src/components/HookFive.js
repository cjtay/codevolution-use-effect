import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Component.css';

function HookFive() {
    const [post, setPost] = useState([]);
    const [id, setId] = useState(1);
    const [selectedId, setSelectedId] = useState(1);

    const changeHandler = (e) => {
        setId(e.target.value);
    };

    const selectHandler = () => {
        setSelectedId(id);
        console.log(id);
    };

    useEffect(() => {
        axios
            .get(`http://jsonplaceholder.typicode.com/posts/${selectedId}`)
            .then((res) => {
                setPost(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [selectedId]);

    return (
        <div className='Component'>
            <h1>React Hooks Tutorial 13/14 - fetching data with useEffect</h1>
            <input type='text' id='id' value={id} onChange={changeHandler} />
            <button onClick={selectHandler}>Fetch post</button>
            <p>
                <span>{post.id}</span>
                {post.title}
            </p>
        </div>
    );
}

export default HookFive;
