import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 80vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 10rem;
  text-transform: uppercase;
`;

const StyledLink = styled(Link)`
  color: #ced6f3;

  :visited {
    color: #ced6f3;
  }
`;

export default function Contact() {
  return (
    <Layout>
      <Wrapper>
        <Title>Say hello</Title>
        <StyledLink to={'https://github.com/lovisaelensky'}>
          GitHub →
        </StyledLink>
        <StyledLink to={'https://www.linkedin.com/in/lovisa-elensky/'}>
          LinkedIn →
        </StyledLink>
      </Wrapper>
    </Layout>
  );
}
