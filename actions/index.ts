import {
  ADD_POST,
  FETCH_POSTS,
  FETCH_POST,
  FETCH_COMMENTS,
  ADD_COMMENT
} from '../constants/action-types';

import {
  getPosts,
  getPost,
  getComments,
  createPost,
  createComment
} from '../api/client';

export const fetchPosts = () => async (dispatch) => {
  const posts = await getPosts();
  return dispatch({ type: FETCH_POSTS, posts });
};

export const fetchPost = (postId: number) => async (dispatch) => {
  const post = await getPost(postId);
  return dispatch({ type: FETCH_POST, post });
};

export const addPost = (newPost: Post) => async (dispatch) => {
  const post = await createPost(newPost);

  return dispatch({ type: ADD_POST, post });
};

export const fetchComments = () => async (dispatch) => {
  const comments = await getComments();
  return dispatch({ type: FETCH_COMMENTS, comments });
}

export const addComment = (newComment: Comment) => async (dispatch) => {
  const comment = await createComment(newComment);
  return dispatch({ type: ADD_COMMENT, comment });
};
