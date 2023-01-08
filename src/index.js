import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './app/store'
import { Provider } from 'react-redux';
import ToggleColorModeProvider from './utils/ToggleColorMode';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
 <ToggleColorModeProvider>
    <App />

    </ToggleColorModeProvider>
    </Provider>
   
  
);


