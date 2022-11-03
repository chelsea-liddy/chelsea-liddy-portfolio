import Projects from './Projects'
import Contact from './Contact'
import { HashLink as Link } from 'react-router-hash-link'
import ProfilePicture from './images/Profile-3mb.jpg'

function App() {
  return (
    <>
      <div id="home" className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={ProfilePicture}
            alt="Chelsea"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Kia ora!</h1>
            <p className="py-6">
              I'm Chelsea Liddy, a developer based in Ōtautahi Christchurch.
              After more than five years in the heritage sector as an Archivist,
              I attended Dev Academy Aotearoa and graduated with a keen interest
              in web design and development.
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1tO91G6YqWtn2ORtQuj3WirtISpcc0341/view?usp=sharing"
            >
              <button className="btn btn-primary m-2">CV</button>
            </a>
            <Link to="#projects">
              <button className="btn btn-secondary m-2">Projects</button>
            </Link>
            <Link to="#contact">
              <button className="btn btn-accent m-2">Contact</button>
            </Link>
          </div>
        </div>
      </div>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  )
}

export default App
