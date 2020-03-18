import { useState, ChangeEvent, FormEvent } from 'react';
import Layout from '../../components/MyLayout';
import axios from 'axios';
import styled from 'styled-components'

const PostDetails = styled.section`
  display: flex;
  margin-top: 30px;
  margin-left: 15px;

  .post-photo {
    width: 50%;
    margin-right: 5%;
  }

  form {
    position: relative;

    button {
      position: absolute;
      top: 3px;
      right: 10%;
      background-color: #e6e6e6;
      border: none;
      outline: none;
      cursor: pointer;
    }
  }
`
const CommentInput = styled.input`
  width: 90%;
  padding: 5px 10px;
  background-color: #e6e6e6;
  border-radius: 15px;
  border: none;
  outline: none;

  .post-photo {
    width: 50%;
    margin-right: 5%;
  }
`
const CommentsList = styled.ul`
  list-style-image: url('https://img.icons8.com/officel/16/000000/user.png');
`
const Post = (props:any) => {
  const [comment, setComment] = useState('');

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setComment(target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    if (comment.trim() !== '') {
      await axios
      .post('https://simple-blog-api.crew.red/comments', { body: comment, postId: props.post.id });
      setComment('');
    } 
  }  

  return (
    <Layout>
      <PostDetails>
      <img className="post-photo" src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ" alt="post photo"/>
      <div>
        <h1>{props.post.title}</h1>
        <p>{props.post.body}</p>
        <form onSubmit={handleSubmit}>
          <CommentInput
            type="text"
            value={comment}
            placeholder="Comment..."
            onChange={handleInputChange}
          />
          <button type="submit">Add</button>
        </form>
        <CommentsList>
          {props.comments.map((comment: Comment) =>
            <li key={comment.id}>
              {comment.body}
            </li>)}
        </CommentsList>
      </div> 
      </PostDetails>
  </Layout>
  );
}

Post.getInitialProps = async function(context: any) {
  const { id } = context.query;
  const postFromServer = await axios.get(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`);
  const commentsFromServer = await axios.get('https://simple-blog-api.crew.red/comments')
  const comments = commentsFromServer.data.filter((comment: Comment) => comment.postId === +id)
  return { 
    post: postFromServer.data,
    comments: comments
  };
};

export default Post;