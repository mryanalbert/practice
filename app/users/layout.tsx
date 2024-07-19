import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users",
  description: "List of Users",
};

export default function UsersLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <p>UsersLayout</p>
      {children}
    </div>
  );
}
