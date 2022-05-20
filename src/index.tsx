import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer } from 'miragejs';

import { App } from './App';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Desenvolvimento de web site',
          amount: 12000,
          type: 'deposit',
          category: 'Trabalho',
          createdAt: '20/05/2022',
        }
      ]
    });
  }
});

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);