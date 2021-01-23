import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button'
import DenseAppBar from './DenseAppBar'

function App() {
  return ( 
    <div className="App">
      <header className="App-header">
        <DenseAppBar/>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}


      </header>
    </div>
  );
}

export default App;
