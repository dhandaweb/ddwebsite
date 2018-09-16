import React from 'react';
import ReactDom from  'react-dom';
import Routes from './components/Routes';

import './stylesheet/index.scss';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDom.render(
  <Routes />,
  document.getElementById('app')
);
