import { Container } from 'react-bootstrap';
import InputForm from './components/InputForm';
import './App.scss';
function App() {
  return (
    <Container
      className="bg-light"
      style={{
        fontFamily: 'Quicksand',
        fontSize: '1.5rem',
        color: '#3b2121',
      }}
    >
      <h1 className="header">Tax Calculator</h1>
      <h4 className="sub-header">Find out how much you have to pay in taxes</h4>
      <InputForm />
    </Container>
  );
}

export default App;
