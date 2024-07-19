"use client";

import Link from "next/link";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Button from "./components/Button";
import Input from "./components/Input";
import Container from "./components/Container";
import LoggedIn from "./components/state/LoggedIn";
import User from "./components/state/User";
import Counter from "./components/state/Counter";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { Box } from "./components/context/Box";
import { TabsDemo } from "./components/Tabs";

export default function Home() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];

  return (
    <div>
      <Greet name="Ryan" isLoggedIn={true} />
      {/* <Person name={personName} />
      <PersonList names={nameList} /> */}
      {/* <Status status="success" />
      <Oscar>
        <Heading>Placeholder text</Heading>
      </Oscar>
      <Button handleClick={(e, id) => console.log("Button clicked", e, id)} />
      <Input value="" handleChange={(e) => console.log(e.target.value)} />
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
      <LoggedIn />
      <User />
      <Counter />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}
      <TabsDemo />
      <Link href="/users" className="decoration-solid underline text-blue-600">
        Users
      </Link>
      <h1>hi</h1>
    </div>
  );
}
