import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/containers/App.jsx';
import { Provider } from 'react-redux';
import configureStore from './app/store/configureStore.jsx';

const store = configureStore();

ReactDOM.render(<Provider store={store}>
<App/>
</Provider>, document.getElementById('app'));