import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://simple-blog-api.crew.red',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const createPost = async (newPost: Post) => {
  try {
    const response = await apiClient.post<Post>('/posts', newPost);
    const post = response.data;
    return post;
  } catch (err) {
    if (err && err.response) {
      console.log(err.response.status);
    }
    
    throw err;
  }
};

export const getPost = async (id: any) => {
  try {
    const response = await apiClient.get<Post>(`/posts/${id}?_embed=comments`);
    return response.data;
  } catch (err) {
    if (err && err.response) {
      console.log(err.response.status);
    }
    
    throw err;
  }
};

export const getPosts = async () => {
  try {
    const response = await apiClient.get<Post[]>('/posts');
    return response.data;
  } catch (err) {
    if (err && err.response) {
      console.log(err.response.status);
    }
    
    throw err;
  }
};

export const createComment = async (newComment: Comment) => {
  try {
    const response = await apiClient.post<Comment>('/comments', newComment);
    const comment = response.data;
    return comment;
  } catch (err) {
    if (err && err.response) {
      console.log(err.response.status);
    }
    
    throw err;
  }
};

export const getComments = async () => {
  try {
    const response = await apiClient.get<Comment[]>('/comments');
    return response.data;
  } catch (err) {
    if (err && err.response) {
      console.log(err.response.status);
    }
    
    throw err;
  }
};
