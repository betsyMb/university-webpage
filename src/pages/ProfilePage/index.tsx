// Layouts
import { DefaultLayout } from "../../layouts";

// Hooks
import { useAuth } from "../../hooks";

// Styles
import styles from "./styles.module.css";
import { SeoInformation } from "../../components";

export default function ProfilePage() {
  const auth = useAuth();
  return (
    <DefaultLayout>
      <div className={`${styles.Container} pt-5 text-white vh-100`}>
        <div className="text-center">
          <h1 className="pt-5">Hello {auth.user}!</h1>
          <section>
            <SeoInformation />
          </section>
        </div>
      </div>
    </DefaultLayout>
  );
}
