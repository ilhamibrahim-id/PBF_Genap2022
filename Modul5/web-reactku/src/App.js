// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// P1
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// export default function BasicExample() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/home">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/dashboard">Dashboard</Link>
//           </li>
//         </ul>

//         <hr />
//         <Switch>
//           <Route exact path="/">
//             <Home />
//           </Route>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/dashboard">
//             <Dashboard />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// // You can think of these components as "pages"
// // in your app.

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }

// function About() {
//   return (
//     <div>
//       <h2>About</h2>
//     </div>
//   );
// }

// function Dashboard() {
//   return (
//     <div>
//       <h2>Dashboard</h2>
//     </div>
//   );
// }

// P2
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useParams
// } from "react-router-dom";

// export default function ParamsExample() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/netflix">netflix</Link>
//           </li>
//           <li>
//             <Link to="/gmail">gmail</Link>
//           </li>
//           <li>
//             <Link to="/yahoo">yahoo</Link>
//           </li>
//           <li>
//             <Link to="/amazon">amazon</Link>
//           </li>
//         </ul>

//         <hr />
//         <Switch>
//           <Route path="/:id" children={<Child />} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// // You can think of these components as "pages"
// // in your app.

// function Child(){
//   let { id } = useParams();
//   return (
//     <div>
//       <h3>ID: {id}</h3>
//     </div>
//   );
// }

// P3
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useParams,
//   useRouteMatch
// } from "react-router-dom";

// export default function NestingExample() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/topics">Topics</Link>
//           </li>
//         </ul>
//         <hr />

//         <Switch>
//           <Route exact path="/">
//             <Home />
//           </Route>
//           <Route path="/topics">
//             <Topics />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }

// function Topics() {
//   let { path, url } = useRouteMatch();

//   return (
//     <div>
//       <h2>Topics</h2>
//       <ul>
//         <li>
//           <Link to={`${url}/Sate, Nasi goreng`}>Kuliner</Link>
//         </li>
//         <li>
//           <Link to={`${url}/Wisata alam, Museum`}>Travelling</Link>
//         </li>
//         <li>
//           <Link to={`${url}/Salaris, JW Marriot`}>Review Hotel</Link>
//         </li>
//       </ul>

//       <Switch>
//         <Route exact path={path}>
//           <h3>Please select a topic.</h3>
//         </Route>
//         <Route path={`${path}/:topicId`}>
//           <Topic />
//         </Route>
//       </Switch>
//     </div>
//   );
// }

// function Topic() {
//   let { topicId } = useParams();

//   return (
//     <div>
//       <h3>{topicId}</h3>
//     </div>
//   );
// }

// P4
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  useHistory,
  useLocation,
  Redirect
} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';
import { Alert } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { ListGroupItem } from "react-bootstrap";
import { Form } from "react-bootstrap";
export default function AuthExample() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home">Batoka Store</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home"><b>Home</b></Nav.Link>
            <Nav.Link href="/private"><AuthButton /></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div>

        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute path="/private">
            <ProtectedPage />
          </PrivateRoute>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

function AuthButton() {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/link/" } };

  return fakeAuth.isAuthenticated ? (
    <b
      onClick={() => {
        fakeAuth.signout(() => history.push(from));
      }}
    >
      Sign out
    </b>
  ) : (
    <b>Produk</b>
  );
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

function Home() {
  return (
    <div>
    <Container>
      <Row>
        <Col><Card style={{ width: 'full' }}>
        <Card.Img variant="top" src="https://img.freepik.com/free-vector/flat-sale-banner-with-photo_23-2149026968.jpg?w=1380&t=st=1648112128~exp=1648112728~hmac=f068bea50c99e19c4723f49472eefc4ae3d3c77e91d9dd6859600748c0b59a90" />
      </Card></Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col>
      <Form>
      <br />
      <h3 align="center">Masukan Kritik dan Saran Anda</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </Col>
      </Row>
      </Container>
    </div>
  );
}
function ProtectedPage() {
  return (
    <Container>
      <br />
      <Row>
        <Col> <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://pingpoint.co.id/media/images/KEMAYORAN_FASHION_INI_15_PILIHAN_SEPATU_LOKAL_.width-500.jpg" />
          <Card.Body>
            <Card.Title>Sepatu Cats</Card.Title>
            <Card.Text>
              Rp. 350.000,-
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
        <Col> <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://img.lovepik.com/free-png/20210918/lovepik-leisure-sports-shoes-png-image_400272778_wh1200.png" />
          <Card.Body>
            <Card.Title>Sepatu Vens</Card.Title>
            <Card.Text>
              Rp. 450.000,-
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
        <Col> <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://tamazhequ.files.wordpress.com/2013/04/sepatu-kets.jpg" />
          <Card.Body>
            <Card.Title>Sepatu Keren</Card.Title>
            <Card.Text>
              Rp. 250.000,-
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
      </Row>
      <br />
      <Row>
        <Col> <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://cms.sehatq.com/public/img/article_img/beragam-tipe-sepatu-olahraga-wanita-mana-yang-harus-anda-pilih-1615871573.jpg" />
          <Card.Body>
            <Card.Title>Sepatu Kids</Card.Title>
            <Card.Text>
              Rp. 350.000,-
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
        <Col> <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://cdn-2.tstatic.net/wartakota/foto/bank/images/sepatu-adidas-yeezy-boost-350-v2-black.jpg" />
          <Card.Body>
            <Card.Title>Sepatu Vens</Card.Title>
            <Card.Text>
              Rp. 450.000,-
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
        <Col> <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://cdn-2.tstatic.net/tribunnews/foto/bank/images/murah-dan-berkualitas-sepatu-pria-model-minimalis-karya-anak-ba_20210806_160940.jpg" />
          <Card.Body>
            <Card.Title>Sepatu Girl</Card.Title>
            <Card.Text>
              Rp. 250.000,-
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
      </Row>
    </Container>
  );
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/link/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <Alert variant="success">
        <Alert.Heading>Halo, senang bertemu dengan anda</Alert.Heading>
        <p>
          Batoka store hadir dikalangan masyarakat untuk memenuhi kebutuhan dalam sehari hari, batoka shop
          menjual sepatu dengan bahan yang paling bagus di indonesia dan pastinya produk yang kami jual
          original dari anak bangsa
        </p>
        <hr />
        <p className="mb-0">
          sebelum lanjut melihat produk kami izinkan silahkan login terlebih dahulu <button variant="warning" onClick={login}>Log in</button>{' '}
        </p>
      </Alert>
    </div>
  );
}


