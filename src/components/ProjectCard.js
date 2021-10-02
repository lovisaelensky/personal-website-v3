import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled(Link)`
  color: #ced6f3;

  :visited {
    color: #ced6f3;
  }
`;

const ImageContainer = styled.div`
  h2 {
    font-size: 1rem;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }

  img {
    width: 100%;
  }
`;

export default function ProjectCard({ title, imageUrl, body, url }) {
  return (
    <CardContainer to={url}>
      <ImageContainer>
        <h2>{title}</h2>
        <img src={imageUrl} alt="" />
      </ImageContainer>
      <p>{body}</p>
    </CardContainer>
  );
}
