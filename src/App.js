//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextFrom from './Components/TextFrom';
import Alert from './Components/Alert';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const removeBodyClasses = () =>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    if (cls === 'dark') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    /* else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    } */
    if (cls === 'light') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
    if (cls === 'primary') {
      setMode('primary');
      document.body.style.backgroundColor = 'blue';
      showAlert("Primary mode has been enabled", "success");
    }
    if (cls === 'success') {
      setMode('success');
      document.body.style.backgroundColor = 'green';
      showAlert("Success mode has been enabled", "success");
    }
    if (cls === 'danger') {
      setMode('danger');
      document.body.style.backgroundColor = 'red';
      showAlert("Danger mode has been enabled", "success");
    }
    if (cls === 'warning') {
      setMode('warning');
      document.body.style.backgroundColor = 'yellow';
      showAlert("Warning mode has been enabled", "success");
    }
    
  }

  return (
    <>
      <Router>
        <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my3">
          <Routes>
          <Route path="/about" element={<About mode={mode}/>} />
            <Route path="/" element= {<TextFrom showAlert={showAlert} heading='Enter the text to analyze below' mode={mode}/>} />            
          </Routes>
          {/* <TextFrom showAlert={showAlert} heading='Enter the text to analyze below' mode={mode} /> */}
        </div>
        </Router>
    </>
  );
}

export default App;
