// React
import { ChangeEvent, useState } from "react";
import { Navigate } from "react-router-dom";

// Layouts
import { DefaultLayout } from "../../layouts";

// Hooks
import { useAuth } from "../../hooks";

//Styles
import styles from "./styles.module.css";

export default function LoginPage() {
  const { login, user: username } = useAuth();

  const [user, setUser] = useState<string | null>(null);

  // Validating if the user is already logged
  if (username) {
    return <Navigate to="/profile" />;
  }

  // Handlers
  function handleClick(e: any) {
    e.preventDefault();
    if (user) {
      login && login(user);
    }
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setUser((event.target as HTMLInputElement)?.value);
  }

  return (
    <DefaultLayout>
      <div className={`${styles.Container} vh-100 pt-large`}>
        <h1 className="text-white text-center mb-5">
          Fill the form to see your profile
        </h1>
        <div className="card w-50 m-auto h-50">
          <form className="w-75 m-auto" onSubmit={handleClick}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                aria-describedby="name"
                placeholder="Enter your name"
                onChange={handleChange}
              />
              <div className="d-flex justify-content-end">
                <button
                  type="submit"
                  className={`${styles.button} btn mt-5 text-white`}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </DefaultLayout>
  );
}
