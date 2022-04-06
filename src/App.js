import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';

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
            <Nav className=''>
              {/* <NavLink to='/' exact className='nav-a'>
                Home
              </NavLink> */}
              {/* <NavLink to='/About' exact className='nav-a'>
                Contact
              </NavLink> */}

              <a className='nav-a' href='https://anichart.net/' target='_blank' rel="noreferrer">AniChart</a>
              
              <NavDropdown className='nav-dropdown' title="Watch Anime" id="basic-nav-dropdown">
                <NavDropdown.Item target='_blank' rel="noreferrer" href="https://www.crunchyroll.com/">Crunchyroll</NavDropdown.Item>
                <NavDropdown.Item target='_blank' rel="noreferrer" href="https://www1.gogoanime.ai/">Gogoanime</NavDropdown.Item>
                <NavDropdown.Item target='_blank' rel="noreferrer" href="https://www1.animeultima.to/">Animeultima</NavDropdown.Item>
                <NavDropdown.Item target='_blank' rel="noreferrer" href="https://www2.kickassanime.ro/">Kickassanime</NavDropdown.Item>
                <NavDropdown.Item target='_blank' rel="noreferrer" href="https://9anime.to/">9anime</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown className='nav-dropdown' title="News" id="basic-nav-dropdown">
                <NavDropdown.Item target='_blank' rel="noreferrer" href="https://www.animenewsnetwork.com/">AnimeNewsNetwork</NavDropdown.Item>
                <NavDropdown.Item target='_blank' rel="noreferrer" href="https://otakumode.com/news">OtakuMode</NavDropdown.Item>
              </NavDropdown>
              <a className='nav-a' href='https://myanimelist.net/profile/-HeXy-' target='_blank' rel="noreferrer">MyAnimeList</a>
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