import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Component.css';

function HookFour() {
    const [posts, setPost] = useState([]);

    useEffect(() => {
        axios
            .get('http://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                console.log(res);
                setPost(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className='Component'>
            <h1>React Hooks Tutorial 12 - fetching data with useEffect</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default HookFour;
