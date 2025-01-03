import ImageIcon from "/NOLIMIT-BUZZ.svg";
import { Link } from "react-router";
import { useStore } from "../store";
export default function Navbar() {
  const { setPage } = useStore();

  const handleBack = () => {
    setPage(1);
  }
  return (
    <nav className="bg-white shadow p-5 flex items-center justify-between flex-wrap" onClick={handleBack}>
      <Link to="/">
        <img
          style={{ width: "200px" }}
          src={ImageIcon}
          alt="nolimitbuzz icon"
        />
      </Link>
      <a
        href="https://github.com/adewale2018/nolimitbuzz"
        target="_blank"
        className="cursor-pointer text-sky-600 hover:text-sky-700"
      >
        Source code
      </a>
    </nav>
  );
}
