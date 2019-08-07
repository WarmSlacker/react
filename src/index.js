import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import MyStudentManagement from './MyStudentManagement';
import MyButton from './MyButton';
import Mybox from './MyBox';
import MyProductList from './MyProductList';

ReactDOM.render(<MyProductList/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
