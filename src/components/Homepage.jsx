import { Link } from "react-router-dom";
import githubLogo from "../assets/githubLogo.png" 


function Homepage(props) {
  return (
    <div className="layout">
   <nav className="navbar"> 
    <h2>Vacational Appartments</h2>
    <img src="./src/img/random-logo.png" alt="logo" />
     </nav>
      {/* Sidebar */}
      <aside className="sidebar">
        <ul>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/">Accommodation List</Link></li>
          <li><Link to="/Add">Add Accommodation</Link></li>
         </ul>
      </aside>

      {/* Main Content */}
      <main className="content">
        {props.children}
      </main>

      {/* Footer */}
      <footer className="footer">
        <a href="https://github.com/GwendalBoedec/miniproject2/tree/main" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub Logo" width="40" height="40" />
        </a>
      </footer>
    </div>
  );
}

export default Homepage;




