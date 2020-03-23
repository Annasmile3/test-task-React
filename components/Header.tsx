import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  margin-top: 20px;
`;

const A = styled.a`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #000;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: background-color 0.3s, opacity 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #000;
    color: #fff; 
    opacity: 0.8;
  }
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <Link href="/">
        <A>Latest posts</A>
      </Link>
      <Link href="/posts/new">
        <A>New post</A>
      </Link>
    </HeaderWrapper>
  );
}
