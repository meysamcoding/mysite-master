import Home from '../Home/Home'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Portfolio from '../Portfolio/Portfolio'
import Contact from '../Contact/Contact';
import logo from '../images/logo.svg';
import './style.css'

function Router1() {
  return (
    <Router>
      <div className="navigation">
        <nav className="container-fluid">
          <div className="row">
                <div className = "col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center">
                   <div className = "logo">
                       <a href = "index.html"><img src={logo} /></a>
                   </div>
                </div>
                <div className = "col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right">
						 
                <ul className="primary-nav">
                  <li className="nav-item"><Link to={'/'} className="nav-link"> Home </Link></li>
                  <li className="nav-item"><Link to={'/contact'} className="nav-link">Contact</Link></li>
                  <li className="nav-item"><Link to={'/portfolio'} className="nav-link">Portfolio</Link></li>
                </ul>
                
					  </div>
          </div>
        </nav>
        </div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/portfolio' component={Portfolio} />
        </Switch>
      
    
  </Router >
  );
}

export default Router1;