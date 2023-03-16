// React
import { Link, Navigate } from "react-router-dom";

// Hooks
import { useAuth } from "../../hooks";

// Styles
import styles from "./styles.module.css";

export default function Navbar() {
  const auth = useAuth();

  return (
    <>
      <header className={`${styles.container} position-absolute top-0`}>
        <ul
          className={`nav nav-pills nav-fill  small  shadow-sm `}
          id="pillNav2"
          role="tablist"
        >
          <li className="nav-item p-2" role="presentation">
            <Link to={"/"} className="nav-link text-white ">
              Home
            </Link>
          </li>
          <li className="nav-item p-2" role="presentation">
            <Link to={"/profile"} className="nav-link text-white ">
              Profile
            </Link>
          </li>
          <li className="nav-item  p-2" role="presentation">
            {auth.user ? (
              <button
                className="nav-link text-white "
                id="contact-tab2"
                data-bs-toggle="tab"
                type="button"
                role="tab"
                aria-selected="false"
                onClick={() => auth.logout()}
              >
                Logout
              </button>
            ) : (
              <Link to={"/login"} className="nav-link text-white ">
                Login
              </Link>
            )}
          </li>
        </ul>
      </header>
    </>
  );
}
