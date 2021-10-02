import React from 'react';
import Navbar from './Navbar';
import { createGlobalStyle } from 'styled-components';
import '../css/typography.css';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }

    body {
        background-color: #0e192d;
        max-width: 100vw;
        height: 90vh;
        font-family: 'Cyrene';
        color: #ced6f3;
    }

`;

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <GlobalStyles />
      <div className="layout">
        <Navbar />
        <div className="content">{children}</div>
        <footer>
          <p></p>
        </footer>
      </div>
    </React.Fragment>
  );
}
