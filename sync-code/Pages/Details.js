import React,{useEffect} from 'react';
import {useParams} from 'react-router-dom'
import { api } from '../Common/API';
import { useDispatch, useSelector } from 'react-redux';
import { singlePostData, getAllSinglePost } from '../features/posts/postsSlice';


function Details(props) {
    const {id}=useParams()
    const data = useSelector(getAllSinglePost)
    const dispatch = useDispatch()
    

    useEffect(() => {
        const dataFn = async () => {
            const res = await fetch(api + `/posts/${id}`)
            const res1 = await res.json()
            console.log(res1)
            dispatch(singlePostData(res1))
        }
        dataFn()
    },[])

    return (
        <div>
            <h1>Post Details</h1>
            <p>{data.title}</p>

        </div>
    );
}

export default Details;