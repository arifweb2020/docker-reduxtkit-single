import React,{useEffect} from 'react';
import {useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getAllSinglePost, fetchAsyncSinglePost } from '../features/posts/postsSlice';


function Details(props) {
    const {id}=useParams()
    const data = useSelector(getAllSinglePost)
    const dispatch = useDispatch()
    
    useEffect(() => {
            dispatch(fetchAsyncSinglePost(id))
    },[dispatch])

    return (
        <div>
            <h1>Post Details</h1>
            <p>{data.title}</p>
        </div>
    );
}

export default Details;