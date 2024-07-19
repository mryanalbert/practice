import { Name } from "./Person.types";

type PersonListProps = {
  names: Name[];
};

export default function PersonList({ names }: PersonListProps) {
  return (
    <div className="text-center mt-4 text-green-600">
      {names.map((name) => (
        <h2 key={name.first}>
          {name.first} {name.last}
        </h2>
      ))}
    </div>
  );
}
