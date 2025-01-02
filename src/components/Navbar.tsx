import ImageIcon from "/NOLIMIT-BUZZ.svg";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-5">
      <Link to="/">
        <img
          style={{ width: "200px" }}
          src={ImageIcon}
          alt="nolimitbuzz icon"
        />
      </Link>
    </nav>
  );
}
