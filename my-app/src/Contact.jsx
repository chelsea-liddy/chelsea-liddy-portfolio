function Contact() {
  return (
    <div className="m-16">
      <div className="card w-auto bg-base-100 m-auto">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Get in touch</h2>
          <div className="card-actions justify-end">
            <a href="https://www.linkedin.com/in/chelsea-liddy/">
              <button className="btn btn-accent">LinkedIn</button>
            </a>
            <div className="btn btn-secondary">
              E-mail: chelsea.r.liddy@gmail.com
            </div>
            <a href="https://github.com/chelsea-liddy">
              <button className="btn btn-primary">GitHub</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
