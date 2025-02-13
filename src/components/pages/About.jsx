import hamidPic from "../../assets/hamid_picture.png"


function About () {
    return(
    <>
    <header className="about-header"> 
    <h1 id="about-title">about our project</h1>
        <section className = "about-project">
    <h2>Vacational Appartments, find the perfect accomodation for your needs!  </h2>
    <p> Vacational Appartments is a platform compiling the best accomodations, guarantiing you an unforgotable trip. Scroll and find your next spot! </p>
        </section>
    </header>
    <div >
        <h2>The team behind the project</h2>
            <section className= "teamContainer">
                <section className="team-card">
                <img className="profil-picture" src={hamidPic} alt="your photo" />
                <h3>Hamid </h3>
                <p>Hamid was born in Pakistan, is based in Germany, and is ethnically from the Indian subcontinent. For more details, please follow the links</p>
                <a href="https://github.com/hamid89"><img src="src\assets\githubLogo.png" alt="github account" width="40" height="40"/></a> 
                <br/>
                <a href="https://www.linkedin.com/in/hafiz-muhammad-hamid-378b17172/"><img src="src\assets\linkedin logo.png" alt="linkedin account" width="40" height="40"/></a>
                </section>
                <section className="team-card">
                <img className="profil-picture" src="src\assets\picture Gwendal.png" alt="your photo" />
                <h3>Gwendal </h3>
                <p>Based in France, Gwendal started his carreer as consultant in the banking area, before switching to transport topics. As hobbies, he loves discovering new places while doing some exercise (running, biking...). Nothing better than a good headquarter to enjoy these activities... That's where Vacational Appartments comes up!</p>
                <a href="https://github.com/gwendalboedec"><img src="src\assets\githubLogo.png" alt="github account" width="40" height="40"/></a> 
                <br/>
                <a href="https://www.linkedin.com/in/gwendal-bo%C3%ABdec-232a3266/"><img src="src\assets\linkedin logo.png" alt="linkedin account" width="40" height="40"/></a>
                </section>
            </section>
    </div>
    </>
)
}

export default About