import React, { useState, ChangeEvent, FormEvent } from 'react';
import { nextConnect } from '../../store/index';
import styled from 'styled-components';
import { fetchPost, fetchComments, addComment } from '../../actions';
import Layout from '../../components/MyLayout';

const PostDetails = styled.section`
  display: flex;
  margin: 30px 0 30px 15px;

  .post-photo {
    width: 50%;
    margin-right: 5%;
  }

  p {
    font-family: serif;
    color: grey;
  }
  
  form {
    position: relative;

    button {
      position: absolute;
      top: 4px;
      right: 10%;
      background-color: #e6e6e6;
      border: none;
      outline: none;
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

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
`;

const CommentsList = styled.ul`
  list-style-image: url('https://img.icons8.com/officel/16/000000/user.png');
`;

interface Props {
  post: Post,
  comments: Comment[],
};

const Post = (props: Props) => {
  let { comments,
    post: { title, body }
  } = props;
  const [comment, setComment] = useState('');
  const [commentList, setComments] = useState(comments);

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setComment(target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (comment.trim() !== '') {
      addComment({ body: comment, postId: props.post.id } as Comment);
      setComment('');
      setComments([...commentList, { body: comment, postId: props.post.id }] as Comment[]);
    }
  };

  return (
    <Layout>
      <PostDetails>
        <img
          className="post-photo"
          alt="laptop"
          src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ"
        />
        <div>
          <h1>{title}</h1>
          <p>{body}</p>
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
            {commentList.map((item: Comment) => (
              <li key={item.id}>{item.body}</li>
            ))}
          </CommentsList>
        </div>
      </PostDetails>
    </Layout>
  );
};

Post.getInitialProps = async function (ctx) {
  const { id } = ctx.query;
  const post = await ctx.store.dispatch(fetchPost(id));
  const comments = await ctx.store.dispatch(fetchComments());
  const filteredcomments = comments.comments.filter((comment: Comment) => comment.postId === +id)
  return {
    post: post.post,
    comments: filteredcomments,
  };
};

export default nextConnect((state) => state)(Post)
