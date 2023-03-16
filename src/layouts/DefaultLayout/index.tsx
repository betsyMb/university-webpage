// Components
import { Navbar } from "../../components";

type Props = {
  children: JSX.Element;
};

export default function DefaultLayout({ children }: Props) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
