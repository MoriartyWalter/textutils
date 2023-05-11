//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
/* import About from './Components/About'; */
import Navbar from './Components/Navbar';
import TextFrom from './Components/TextFrom';
import Alert from './Components/Alert';
/* import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'; */

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

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my3">
          {/* <Routes>
          <Route path="/about" element={<About />} />
            <Route path="/" element= {<TextFrom showAlert={showAlert} heading='Enter the text to analyze below' mode={mode}/>} />            
          </Routes> */}
          <TextFrom showAlert={showAlert} heading='Enter the text to analyze below' mode={mode} />
        </div>
        {/* </Router> */}
    </>
  );
}

export default App;
