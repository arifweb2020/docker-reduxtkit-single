import React, { useEffect } from 'react';
import { api } from '../Common/API';
import { useDispatch, useSelector } from 'react-redux';
import { allPosts, getAllposts } from '../features/posts/postsSlice';
import Allposts from './Allposts';

function Home(props) {

    const dispatch = useDispatch()

    const data = useSelector(getAllposts)

    useEffect(() => {
        const dataFn = async () => {
            const res = await fetch(api + "/posts")
            const res1 = await res.json()
            console.log(res1)
            dispatch(allPosts(res1))
        }
        dataFn()
    })
    return (
        <div>
            <h1>Home</h1>
            {
                data.map((item, i) => {
                    return <Allposts key={i} data={item} />
                })
            }
        </div>
    );
}

export default Home;