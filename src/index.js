import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { extendedApiSlice } from './features/posts/postsSlice';
import { usersApiSlice } from './features/users/usersSlice';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

store.dispatch(extendedApiSlice.endpoints.getPosts.initiate());
store.dispatch(usersApiSlice.endpoints.getUsers.initiate());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <Provider store={store}>
        <Router>
            <Routes>
                <Route path="/*" element={<App />} />
            </Routes>
        </Router>
    </Provider>,
    // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
