import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/style.scss';

const ExpenseDashboardPage = () => (
  <div>
    This is from my dashboard component
  </div>  
);

const ExpenseDashboardPage2 = () => (
  <div>
    Zagy tu nena
  </div>  
);

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={ExpenseDashboardPage}/>
      <Route path="/zagy" component={ExpenseDashboardPage2}/>
    </div>
  </BrowserRouter>
);

// stateless functional component
ReactDOM.render(routes, document.getElementById('app'));