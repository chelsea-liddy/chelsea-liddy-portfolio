function Contact() {
  return (
    <div className="bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Get in touch</h2>
          <div className="card-actions justify-end">
            <a
              href="https://www.linkedin.com/in/chelsea-liddy/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn btn-accent">LinkedIn</button>
            </a>
            <div className="btn btn-primary">
              E-mail: chelsea.r.liddy@gmail.com
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
