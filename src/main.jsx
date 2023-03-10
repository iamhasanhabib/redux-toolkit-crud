import { CssBaseline } from '@mui/material';
import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import './assets/style/index.scss';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.headers.post['Content-Type'] = 'application/json';
root.render(
  <React.StrictMode>
    <CssBaseline />
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <ToastContainer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
