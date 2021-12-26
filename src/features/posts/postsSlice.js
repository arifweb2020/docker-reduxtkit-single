import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../Common/API";

export const fetchAsyncPosts = createAsyncThunk(
    "posts/fetchAsyncPosts",
    async () => {
        const res = await fetch(api + "/posts")
        const res1 = await res.json()
        console.log(res1)
        return res1;
    }
);

export const fetchAsyncSinglePost = createAsyncThunk(
    "posts/fetchAsyncSinglePost",
    async (id) => {
        const res = await fetch(api + `/posts/${id}`)
        const res1 = await res.json()
        console.log(res1)
        return res1;
    }
);

const initialState = {
    posts: [],
    singlePost: {}

};

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        allPosts: (state, { payload }) => {
            state.posts = payload;
        },
        //we can do both ways
        // allPosts: (state, action) => {
        //     state.posts = [...action.payload];
        // },
        singlePostData: (state, action) => {
            state.singlePost = { ...action.payload };
        },
        // singlePostData:(state ,{payload}) => {
        //     state.singlePost = payload;
        // },
    },
    extraReducers: {
        [fetchAsyncPosts.pending]: () => {
          console.log("Pending");
        },
        [fetchAsyncPosts.fulfilled]: (state, { payload }) => {
          console.log("Fetched Successfully!");
          return { ...state, posts: payload };
        },
        [fetchAsyncPosts.rejected]: () => {
          console.log("Rejected!");
        },
        [fetchAsyncSinglePost.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully!");
            return { ...state, singlePost: payload };
          },
        
      },
});

export const { allPosts, singlePostData } = postsSlice.actions;
export const getAllposts = (state) => state.allposts.posts;
export const getAllSinglePost = (state) => state.allposts.singlePost;
export default postsSlice.reducer;