import MeMade from './images/memadelogo.JPG'

function Projects() {
  return (
    <>
      <div className="bg-base-200">Projects</div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img src={MeMade} alt="Album" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Me Made</h2>
              <p>
                Keep track of all your creative projects! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Iste laudantium quibusdam
                vero officiis alias, minus accusamus eius repellendus a
                excepturi. Ipsa harum tenetur inventore qui delectus velit hic
                asperiores quae?
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Demo</button>
              </div>
            </div>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img src={MeMade} alt="Lost and Found" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Lost and Found</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam,
                veniam, obcaecati veritatis nostrum doloribus facilis enim sit
                neque voluptatibus reiciendis temporibus nemo. Saepe sint
                repudiandae vitae, doloremque omnis odio harum.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Demo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#slide1" className="btn btn-xs">
          Prev
        </a>
        <a href="#slide2" className="btn btn-xs">
          Next
        </a>
      </div>
    </>
  )
}

export default Projects
