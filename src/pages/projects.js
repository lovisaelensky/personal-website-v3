import React from 'react';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import CovidHouse from '../images/covid-house.png';
import MorningStar from '../images/morning-star.png';
import Settr from '../images/settr.png';
import styled from 'styled-components';

const GridContainer = styled.section`
  display: grid;
  gap: 2em;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  min-height: calc(100vh - 100px);
  margin: 2em;
`;

export default function Projects() {
  return (
    <Layout>
      <GridContainer>
        <ProjectCard
          title="Card title"
          imageUrl={CovidHouse}
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          url="https://quillbot.com/grammar-check"
        />
        <ProjectCard
          title="Card title"
          imageUrl={MorningStar}
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          url="https://quillbot.com/grammar-check"
        />
        <ProjectCard
          title="Card title"
          imageUrl={Settr}
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          url="https://quillbot.com/grammar-check"
        />
        <ProjectCard
          title="Card title"
          imageUrl={CovidHouse}
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          url="https://quillbot.com/grammar-check"
        />
        <ProjectCard
          title="Card title"
          imageUrl={MorningStar}
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          url="https://quillbot.com/grammar-check"
        />
        <ProjectCard
          title="Card title"
          imageUrl={Settr}
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          url="https://quillbot.com/grammar-check"
        />
      </GridContainer>
    </Layout>
  );
}
