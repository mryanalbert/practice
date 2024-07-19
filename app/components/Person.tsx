import { PersonProps } from "./Person.types";

export default function Person({ name: { first, last } }: PersonProps) {
  return (
    <div className="text-center font-semibold">
      {first} {last}
    </div>
  );
}
