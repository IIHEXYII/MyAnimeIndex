import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // NavLink
  } from 'react-router-dom';
  import { Container } from 'react-bootstrap';
  import Home from '../src/pages/Home';
  // import About from './pages/Contact';


const App = () => {
    return (
      <Router>
        <Navbar bg='light' variant='light' expand='lg'>
          <Navbar.Brand href='/'>MY<strong>ANIME</strong>INDEX</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              {/* <NavLink to='/' exact className='nav-link'>
                Home
              </NavLink> */}
              {/* <NavLink to='/About' exact className='nav-link'>
                Contact
              </NavLink> */}
              <a className='nav-link' href='https://myanimelist.net/profile/-HeXy-' target='_blank' rel="noreferrer">MyAnimeList</a>
              <a className='nav-link' href='https://anichart.net/' target='_blank' rel="noreferrer">AniChart</a>
              <a className='nav-link' href='https://www.animenewsnetwork.com/' target='_blank' rel="noreferrer">Anime News</a>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container>
        <Switch>
            <Route path='/' exact component={Home} />
            {/* <Route path='/About' component={About} /> */}
        </Switch>  
        </Container>
      </Router>
    );
  };

  export default App;