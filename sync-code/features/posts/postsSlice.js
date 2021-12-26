import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    singlePost:{}

};

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        allPosts: (state, {payload}) => {
            state.posts = payload;
        },
        //we can do both ways
        // allPosts: (state, action) => {
        //     state.posts = [...action.payload];
        // },
        singlePostData:(state ,action) => {
            state.singlePost = {...action.payload};
        },
        // singlePostData:(state ,{payload}) => {
        //     state.singlePost = payload;
        // },
    },

});

export const {allPosts,singlePostData} = postsSlice.actions;
export const getAllposts = (state)=> state.allposts.posts;
export const getAllSinglePost = (state)=> state.allposts.singlePost;
export default postsSlice.reducer;