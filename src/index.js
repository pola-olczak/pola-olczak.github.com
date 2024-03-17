import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom';
import App from './App';

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  hydrateRoot(<App />, rootElement);
} else {
  createRoot(<App />, rootElement);
}
