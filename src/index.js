import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import SignUpForm from './Components/SignUpForm.jsx';
import './Components/SignUpForm.css';

ReactDOM.render(<SignUpForm />, document.getElementById('root'));
registerServiceWorker();
