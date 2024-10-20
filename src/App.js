import './App.css';
import PhotoCollage from './components/PhotoCollage';
import headshot from './assets/images/Headshot.jpg';

function App() {
  return (
    <div className="App">

      <div className="header">
        <div id='title'>
          <h1>Ashlyn's Vision Board</h1>
          <div id='links'>
            <a href='https://www.linkedin.com/in/ashlyncampbell3' target='_blank' >LinkedIn</a>
            <a href='https://github.com/ashlynthemitm' target='_blank' >GitHub</a>
          </div>
        </div>

        <img 
          src={headshot}
          alt="Headshot"
          style={{width: '200px', height: 'auto', padding: 10, borderRadius: 100}}
        />
      </div>

      <p>Welcome! This is my vision board which includes many goals and aspirations! I am a passionate senior Computer Science and Sociology student with a concentration in Data Science. I am dedicated to technology and interested in advocating for inclusivity through my research. I aspire to pursue a Ph.D. because I am interested in applying computational methods to communities affected by social inequities. My research interests broadly include Human-Centered AI, Computational Social Science, and Societal Computing.  I aspire to leverage data science methods to tackle disparities in minority access to vital resources, such as mobility, to more equitable futures through information and education. With technology evolving rapidly and societal challenges arising from information inequity, I aspire to delve into the development of solutions to bridge this information gap.</p>

      <div id="video-section">
        <iframe width="4000" height="480" src="https://www.youtube.com/embed/RjquHTj4HlY" title="My identity is a superpower | America Ferrera | TED" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        <p style={{padding: 60, backgroundColor: '#b3447d', borderRadius: 15}}>I love this video. This is one of my favorite TED Talks and done by one of my favorite actresses. Often in the TECH space I have to be reminded of this lesson!</p>

      </div>

      <br></br>

      <PhotoCollage/>

      <br></br>

      <div id="footer">
        <h4>© Made By ASH</h4>
      </div>

    </div>
  );
}

export default App;