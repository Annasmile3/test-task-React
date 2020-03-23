import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import Header from './Header';

const Wrapper = styled.div`
  padding: 0 50px;
  border: 1px solid #ddd;
  font-family: 'Gill Sans', sans-serif;
  @media (max-width: 500px) {
    padding: 0 15px;
  }
`;

interface Props {
  children: ReactNode;
}

const LayoutTemplate: FC<Props> = ({ children }) => (
  <Wrapper>
    <Header />
    {children}
  </Wrapper>
);

export default LayoutTemplate;
