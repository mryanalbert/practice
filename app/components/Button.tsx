"use client";

type ButtonProps = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

export default function Button({ handleClick }: ButtonProps) {
  return (
    <button
      className="bg-gray-300 px-4 py-2 mx-2 rounded-md"
      onClick={(e) => handleClick(e, 1)}
    >
      Button
    </button>
  );
}
