let root = document.querySelector("#root");

function Profile() {
    return(
        <img src="./image/Rectangle 90.png"></img>
    )
}
function Intro() {
    return(
        <div className="card-intro">
            <h3>Laura Smith</h3>
            <h4>Frontend Developer</h4>
            <h6>laurasmith.website</h6>
        </div>
    )
}

function Button() {
    return(
        <div className="btn">
            <button className="email-btn">
                <img src="./image/icon.png"></img>
                <span>Email</span>
            </button>
            <button className="linkedin-btn">
                <img src="./image/vector.png"></img>
                <span>LinkedIn</span>
            </button>
        </div>
    )
}
function About(){
    return(
        <main className="about">
            <h3>About</h3>
            <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        </main>
    )
}
function Interests() {
    return(
        <main className="interests">
            <h3>Interests</h3>
            <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </main>
    )
}

function Footer() {
    return(
        <footer className="social">
            <img src="./image/Twitter Icon.png"></img>
            <img src="./image/Facebook Icon.png"></img>
            <img src="./image/Instagram Icon.png"></img>
            <img src="./image/GitHub Icon.png"></img>
        </footer>
    )
}

function App() {
    return(
        <div>
            <Profile />
            <Intro />
            <Button />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}
ReactDOM.render(<App />,root);