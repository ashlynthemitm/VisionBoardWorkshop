import './App.css';
import PhotoCollage from './components/PhotoCollage';
import karlissa from './assets/images/karlissa.jpg';

function App() {
  return (
    <div className="App">

      <div className="header">
        <div id='title'>
          <h1>Karlissa's Vision Board</h1>
          <div id='links'>
            <a href='https://www.linkedin.com/in/karlissabrown/' target='_blank' >LinkedIn</a>
            <a href='https://github.com/KarlissaB' target='_blank' >GitHub</a>
          </div>
        </div>

        <img 
          src={karlissa}
          alt="Karlissa"
          style={{width: '200px', height: 'auto', padding: 10, borderRadius: 100}}
        />
      </div>

      <p>Hello! This is my vision board which includes many goals that I want to pursue in future! After I graduate from Georgia State, I would like to pursue a Master's degree in cybersecurity. I plan to work on gaining certifications so that I could enter a cross-functional area between software development and cybersecurity. Currently, my long-term career goal is to become an application security engineer. Outside of my career aspirations, I would love to make time to explore some of my personal interests like learning new instruments, cooking, knitting, and more! 🙂</p>

      <div id="video-section">
        <iframe width="4000" height="480" src="https://www.youtube.com/embed/zy2Zj8yIe6c" title="A 3-Step Guide to Believing in Yourself | Sheryl Lee Ralph | TED" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        <p style={{padding: 60, backgroundColor: '#4448B3', borderRadius: 15}}>This video serves as a source of motivation for me. I often battle imposter syndrome, and while I understand that it is something that I should not acknowledge, sometimes it can be challenging for me to do. Her words encourage me to keep pursuing my aspirations below!</p>

      </div>

      <br></br>

      <PhotoCollage/>

      <br></br>

      <div id="footer">
        <h4>RISE Stars 2024</h4>
      </div>

    </div>
  );
}

export default App;