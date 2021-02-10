import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {EmpProvider} from './Context';

ReactDOM.render(
<EmpProvider>
    <App />
</EmpProvider>, 
document.getElementById('root'));
registerServiceWorker();
