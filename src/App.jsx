import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import { Container } from 'react-bootstrap';

function App (){
  return (
    <Container>
      <Header title="Gallery of Horns" />
      <Gallery />
      <Footer author="Trevor Ingram" />
    </Container>
    );
}

export default App; 