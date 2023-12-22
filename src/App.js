import logo from './2dudes Logo.png';
import toodudesimg from './Too dudes img.webp'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Main-header">
          <div className="Left-side">
            <img className="Main-logo" src={logo} />
          </div>
          <div className="Right-side">
            <p><span className="Header-text">HOME</span> <span className="Header-text">ABOUT US</span> <span className="Header-text">CONTACT US</span> <span className="Header-text">FAQ</span></p>
          </div>
        </div>

        <div className="Positioning">
          <div className="Walking-America-background">
            <h1 className="Main-header">Walking America</h1>
            <p className="Walking-America-small-text">
            Hi! We're Too Dudes, Hogan and Mythius, and we're walking through every single state in America (All 50)
            Join us as we struggle, learn, and thrive throughout our journey through each and every state.
            All of our social media, donations, and contact info is below: <span style={{color: "royalblue"}}>#WalkingAmerica</span>
            </p>
            <button class="Our-Journey-Button" type="button">
              Our Journey <span style={{color: "gray"}}>></span>
            </button>
          </div>
          <div className="Walking-America-Photo-Position">
            <img className="Walking-America-main-picture"src={toodudesimg} style={{height: "30vw"}} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
