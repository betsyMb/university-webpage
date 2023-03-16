import { IconType } from "react-icons";

type Props = {
  title: string;
  description: string;
  icon: IconType;
};

export default function TechnologyCard({
  description,
  title,
  icon: Icon,
}: Props) {
  return (
    <div className="card text-black w-50 p-4 text-center">
      <h2 className="mb-3">{title}</h2>
      <Icon  height={25} width={25} className="m-auto  h-50 w-50"/>
      <p>{description}</p>
    </div>
  );
}
