import React from 'react';
import ReactDOM from 'react-dom/client';

import { Setting } from './const.ts';

import App from './components/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offersCount={Setting.OffersCount}/>
  </React.StrictMode>
);
