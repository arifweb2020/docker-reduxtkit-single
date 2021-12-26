import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncPosts, getAllposts } from '../features/posts/postsSlice';
import Allposts from './Allposts';

function Home(props) {

    const dispatch = useDispatch()
    const data = useSelector(getAllposts)

    useEffect(() => {
        dispatch(fetchAsyncPosts())
    }, [dispatch])


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