import { ADD_POST, FETCH_POSTS, FETCH_POST, FETCH_COMMENTS, ADD_COMMENT } from '../constants/action-types';
import { combineReducers } from 'redux';

type ActionPost = {
  type: string,
  post: Post,
  posts: Post[]
}

const postStore = (state = { posts: [] }, action: ActionPost) => {
  switch (action.type) {
    case ADD_POST:
      return Object.assign({}, state, {
        posts: [...state.posts, action.post]
      })
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.posts
      }
    case FETCH_POST: 
      return {
        ...state,
        post: action.post
      }  
    default:
      return state
  }
};

type ActionComment = {
  type: string,
  comment: Comment,
  comments: Comment[]
}

const commentStore = (state = { comments: [] }, action: ActionComment) => {
  switch (action.type) {
    case ADD_COMMENT:
      return Object.assign({}, state, {
        comments: [...state.comments, action.comment]
      })
    case FETCH_COMMENTS:
      return {
        ...state,
        comments: action.comments
      }
    default:
      return state
  }
};

export default combineReducers({
  postStore,
  commentStore
});