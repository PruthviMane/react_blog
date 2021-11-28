import "./write.css"

export default function Write() {
    return (
        <div className="register">
      <span className="registerTitle">Write Post</span>
      <form className="registerForm">
        <label>Title</label>
        <input className="registerInput" type="text" placeholder="Enter your username..." />
        <label>Discriptions</label>
        <textarea className="registerInput" type="text" placeholder="Enter your email..." ></textarea>
       <button className="registerButton">POST</button>
      </form>
       
    </div>
    )
}
