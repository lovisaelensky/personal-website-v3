import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 80vw;
  margin: 0 auto;

  p {
    font-size: 2rem;
  }
`;

const Name = styled.h1`
  font-size: 10rem;
  text-transform: uppercase;
  margin: 1rem 0;
`;

const Description = styled.p`
  margin: 1rem 0;
`;

export default function About() {
  return (
    <Layout>
      <Wrapper>
        <p>Hi, I'm</p>
        <Name>Lovisa Elensky</Name>
        <p>A frontend developer student at Hyper Island based in Stockholm</p>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Description>
      </Wrapper>
    </Layout>
  );
}
