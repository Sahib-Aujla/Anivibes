import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './app/store'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Provider } from 'react-redux';
const theme = createTheme({});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
 <ThemeProvider theme={theme}>
    <App />

    </ThemeProvider>
    </Provider>
   
  
);


