import './App.css';
import Container from 'react-bootstrap/Container';
import Header from './components/header';
import Meme from './components/meme';
//import Form from './components/Form';

function App() {

  return (
    <Container fluid id="App">
      <Header />
      <Meme />
    </Container>
  )
}

export default App;
