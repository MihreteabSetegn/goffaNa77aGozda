import logo from './logo.svg';
import yodit from './yodit.jpg'
import './App.css';
import Button from '@material-ui/core/Button'
import DenseAppBar from './DenseAppBar'

function App() {
  return ( 
    <div className="App">
      <DenseAppBar/>
      {/* <header className="App-header"> */}
        {/* <Button variant="contained" color="teritiary" align="left">
          Hello World
        </Button> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src={yodit} alt="logo" />


      {/* </header> */}
    </div>
  );
}

export default App;
