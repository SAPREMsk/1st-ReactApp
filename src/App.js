
import { useState } from 'react';
import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = ( massage,type) => {
    setAlert({
      type: type,
      msg: massage
    })

    setTimeout(() => {
      setAlert(null);
    }, 1800);

  }

  const [mode, setMode] = useState('light'); //whether dark mode enable or not

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#04152f';

      showAlert("Dark mode has been enabeled !" , "success");

      //used to flash or manipulate the title #not good user exp...
      // setInterval(()=>{
      //   document.title='TextUtils is amazing';

      // },2000)

      // setInterval(()=>{
      //   document.title='Install-TextUtils now';
      // },1200)

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';

      showAlert("Light mode has been enabeled !" , "success");
    }
  }

  return (
    <>
      {/* <Navbar/> */}
      <Navbar title="SAPREM" home="Contact" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading="Try TextUtils - Word counter, Character counter, Remove extra spaces" mode={mode} showAlert={showAlert} />

        {/* <About/> */}
      </div>

    </>
  );
}

export default App;
