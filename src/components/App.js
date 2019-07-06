import React from 'react';
import { Provider } from 'react-redux';

import store from '../store';
import Wrapper from './Wrapper';

import './App.css';

function App() {
    return (
        <Provider store={store}>
            <Wrapper />
        </Provider>
    );
}

export default App;
