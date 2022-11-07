import me from "../images/me.png";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="header-info">
        <img className="headshot" src={me} alt="me" />
        <div className="my-info">
          <h1 className="my-name">Kemal Zebari</h1>
          <p className="quick-desc">Software Engineer and Computer Science Fanatic</p>
        </div>
      </div>
      <nav>
        <Link className="nav-link" to="/">
          About
        </Link>
        <Link className="nav-link" to="/projects">
          Projects
        </Link>
        <Link className="nav-link" to="/blog">
          Blog
        </Link>
      </nav>
    </header>
  );
}

export default Header;
