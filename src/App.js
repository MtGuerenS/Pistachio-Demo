import './App.css';
import Spline from '@splinetool/react-spline';
import { Suspense } from 'react';
import { Icon } from '@iconify/react';

function App() {
  function onMouseDown(e) {
    if (e.target.name === "Pistachio")
    {
      alert(e.target.name + "clicked")
    }
  }

  return (
    <div className="App">
      <div className="socials">
        <span className="vert-line" />
        <a href="https://www.instagram.com/ella.doodles/?hl=en" target="_blank">
          <Icon 
            icon="mdi:instagram" 
            className="insta"
            color="#7a08af"
          />
        </a>
        <a href="https://www.tiktok.com/@ella.doodles.ii" target="_blank">
          <Icon 
            icon="ic:round-tiktok" 
            className="insta"
            color="#7a08af"
          />
        </a>
      </div>
      <div className="nav-bar">
        <button> About </button>
        <button> Portfolio </button>
        <button> Store? </button>
        <button> Contact Me </button>
      </div>
      <header className="App-header">
        <div class="bio">
          Daniella Prado
        </div>
        <div class="spline">
          <Suspense fallback={<p> Loading... </p>}>
            <Spline 
              scene="https://prod.spline.design/3INSR9PAiwJSRSiW/scene.splinecode" 
              onMouseDown = {onMouseDown}
            />  
          </Suspense>
        </div>
        
      </header>
    </div>
  );
}

export default App;
