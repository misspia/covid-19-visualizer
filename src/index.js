import ReactDOM from 'react-dom';
import React from 'react';
import { App } from './components/App';
import { createGlobalStyle } from 'styled-components';
import { Colors, Fonts } from './themes';

const GlobalStyle = createGlobalStyle`
  @import url('${Fonts.src}');
  body {
    margin: 0;
    font-family: ${Fonts.family};
    font-weight: ${Fonts.weight.regular};
    color: ${Colors.black};
    height: 100%;
    width: 100%;
  }
  #app {
    height: 100%;
    width: 100%;
  }
  html {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
`;

const Main = () => {
  return (
    <>
      <GlobalStyle />
      <App />
    </>
  )
};

ReactDOM.render(<Main />, document.getElementById('app'));
