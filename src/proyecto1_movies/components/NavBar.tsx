import { Link } from "react-router-dom";

export default function NavBarMovie() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/search"}>Search</Link>
        </li>
        <li>
          <Link to={"/favorites"}>Favorites</Link>
        </li>
      </ul>
    </nav>
  );
}
