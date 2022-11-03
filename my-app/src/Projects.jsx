import MeMade from './images/memadelogo.JPG'
import LostAndFound from './images/lostandfound.PNG'

function Projects() {
  return (
    <>
      <h1 className="bg-base-200 text-5xl font-bold p-5 m-auto text-center">
        Projects
      </h1>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img src={MeMade} alt="Album" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Me Made</h2>
              <p>
                MeMade will be an easy way for me to keep track of my different
                creative projects on the go at any one time! Projects can be
                edited and updates can be stored against each project. Future
                plans are for the app to show fabric and yarn available in the
                'Stash'.
              </p>
              <div className="card-actions justify-end">
                <a href="https://youtu.be/Hm5PQGYp1jQ">
                  <button className="btn btn-primary">Demo</button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img src={LostAndFound} alt="Lost and Found" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Lost and Found</h2>
              <p>
                Lost and Found is an application designed to help New
                Zealander's reunite with their lost possessions. Users can sign
                up to post about items they have either lost and found and
                connect with others in the post comments. Future plans for the
                app include a messaging feature. This app was created as a final
                group project for the Dev Academy bootcamp.
              </p>
              <div className="card-actions justify-end">
                <a href="https://youtu.be/oj0Fla9WJts">
                  <button className="btn btn-primary">Demo</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#slide1" className="btn btn-xs">
          1
        </a>
        <a href="#slide2" className="btn btn-xs">
          2
        </a>
      </div>
    </>
  )
}

export default Projects
