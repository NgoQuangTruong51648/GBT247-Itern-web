import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header/header.jsx';
import Footer from './components/Footer/footer.jsx';
import QuestionDetail from './pages/QuestionDetail/questionDetail.jsx';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header />
    <QuestionDetail />
    <Footer />
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
