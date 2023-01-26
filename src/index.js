import { css, Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global
      styles={css`
        body {
          background-color: rgb(4, 10, 32);
          --suspense-scale-max: 1.05;
          color: white;
          margin: 0;

          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        *,
        ::after ::before {
          box-sizing: border-box;
        }
      `}
    />
    <App />
  </React.StrictMode>,
);
