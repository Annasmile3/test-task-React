import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { nextConnect } from '../store/index';
import { fetchPosts } from '../actions/index';
import Layout from '../components/MyLayout';

const Heading = styled.h1`
  width: 200px;
  margin: 30px auto 50px;
`;

const PostList = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px;
  padding: 0;

  .post-photo {
    width: 100%;
  }

  .title {
    text-decoration: none;
    font-weight: bold;
    font-size: 20px;
    color: #000;

    &:active {
      color: blue;
    }
  }

  .content {
    font-family: serif;
    color: grey;
    margin-top: 5px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

interface Props {
  posts: Post[];
}

const Index = ({ posts }: Props) => {
  return (
    <Layout>
      <Heading>Latest posts</Heading>
      <PostList>
        {posts.map((post: Post) => (
          <li key={post.id}>
            <img
              className="post-photo"
              alt="laptop"
              src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ"
            />
            <br />
            <Link href="/posts/[id]`" as={`/posts/${post.id}`}>
              <a title={`Details for ${post.title}`} className="title">{post.title}</a>
            </Link>
            <p className="content">{post.body}</p>
          </li>
        ))}
      </PostList>
    </Layout>
  );
};

Index.getInitialProps = function ({ store }: any) {
  const posts = store.dispatch(fetchPosts());
  return posts;
};

export default nextConnect((state) => state)(Index);
